import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { requiredFileType } from '../upload-file-validators';

export function uploadProgress<T>( cb: ( progress: number ) => void ) {
  return tap(( event: HttpEvent<T> ) => {
    if ( event.type === HttpEventType.UploadProgress ) {
      cb(Math.round((100 * event.loaded) / event.total));
    }
  });
}

export function toResponseBody<T>() {
  return pipe(
    filter(( event: HttpEvent<T> ) => event.type === HttpEventType.Response),
    map(( res: HttpResponse<T> ) => res.body)
  );
}


@Component({
  selector: 'app-analize',
  templateUrl: './analize.component.html',
  styleUrls: ['./analize.component.css']
})
export class AnalizeComponent {

  progress = 0;
  public visible: boolean;
  public result: string;
  public path;
  public signup = new FormGroup({
    image: new FormControl(null, [Validators.required])
  });
  success = false;

  constructor( private http: HttpClient ) {
  }

  ngOnInit(): void {
    this.visible= false;
    this.result = "";
    this.path="";
  }

  submit() {
    this.success = false;
    if ( !this.signup.valid ) {
      markAllAsDirty(this.signup);
      return;
    }
    
    var reader = new FileReader();
    reader.readAsDataURL(this.signup.value["image"]);
    reader.onload = (event)=>{
      this.path=reader.result;
    }

    console.log(this.signup.value["image"])
    this.http.post('http://localhost:80/test', toFormData(this.signup.value), {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      uploadProgress(progress => (this.progress = progress)),
      toResponseBody()
    ).subscribe(res => {
      this.progress = 0;
      this.success = true;
      this.signup.reset();
      this.result = res["veredict"]
      this.visible=true
      console.log(res)
    });
  }

  hasError( field: string, error: string ) {
    const control = this.signup.get(field);
    return control.dirty && control.hasError(error);
  }
}

export function markAllAsDirty( form: FormGroup ) {
  for ( const control of Object.keys(form.controls) ) {
    form.controls[control].markAsDirty();
  }
}

export function toFormData<T>( formValue: T ) {
  const formData = new FormData();

  for ( const key of Object.keys(formValue) ) {
    const value = formValue[key];
    formData.append(key, value);
  }

  return formData;
}