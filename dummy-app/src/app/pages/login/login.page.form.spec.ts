import { FormBuilder, FormGroup } from "@angular/forms";
import { executionAsyncId } from "async_hooks";
import { LoginPageForm } from "./login.page.form";

describe('loginPageform',()=>{
    let loginPageform:LoginPageForm;
    let form: FormGroup;
    beforeEach(()=>{
        loginPageform= new LoginPageForm(new FormBuilder);
        form = loginPageform.CreateForm();
    })

    it('should create login form empty',()=>{
        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).toEqual("");
        expect(form.get('email').valid).toBeFalsy();
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').value).toEqual("");
        expect(form.get('password').valid).toBeFalsy();
    })
    it('should have email invalid if email is not vaild', ()=>{
        form.get('email').setValue('invalid email');
        expect(form.get('email').valid).toBeFalsy();
    })

    it('should have email valid if email is vaild', ()=>{
        form.get('email').setValue('valid@email.com');
        expect(form.get('email').valid).toBeTruthy();
    })

    it('should have valid form', ()=>{
        form.get('email').setValue('valid@email.com');
        form.get('pasword').setValue('anyPAssword');
        expect(form.valid).toBeTruthy();
    })
})
