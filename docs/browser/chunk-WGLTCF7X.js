import{a as O,b as c,c as P,d as S,e as y,f as F,g as h,h as E,j as I}from"./chunk-QVIDUHR5.js";import{$a as u,Ba as i,Ca as v,Ma as d,Mb as x,Oa as m,Pb as M,Ta as o,Ua as n,Va as p,_,_a as C,hb as a,mb as b}from"./chunk-SKJT6XNZ.js";function T(e,l){e&1&&(o(0,"div"),a(1," Name is required "),n())}function q(e,l){e&1&&(o(0,"div"),a(1," Name should only contain letters and spaces "),n())}function w(e,l){if(e&1&&(o(0,"div",12),d(1,T,2,0,"div",13)(2,q,2,0,"div",13),n()),e&2){let r,t,s=u();i(),m("ngIf",(r=s.form.get("name"))==null||r.errors==null?null:r.errors.required),i(),m("ngIf",(t=s.form.get("name"))==null||t.errors==null?null:t.errors.pattern)}}function k(e,l){e&1&&(o(0,"div"),a(1," Email is required "),n())}function z(e,l){e&1&&(o(0,"div"),a(1," Invalid email format "),n())}function G(e,l){if(e&1&&(o(0,"div",12),d(1,k,2,0,"div",13)(2,z,2,0,"div",13),n()),e&2){let r,t,s=u();i(),m("ngIf",(r=s.form.get("email"))==null||r.errors==null?null:r.errors.required),i(),m("ngIf",(t=s.form.get("email"))==null||t.errors==null?null:t.errors.email)}}function D(e,l){e&1&&(o(0,"div"),a(1," Message is required "),n())}function B(e,l){e&1&&(o(0,"div"),a(1," Message must be at least 10 characters long "),n())}function V(e,l){if(e&1&&(o(0,"div",12),d(1,D,2,0,"div",13)(2,B,2,0,"div",13),n()),e&2){let r,t,s=u();i(),m("ngIf",(r=s.form.get("message"))==null||r.errors==null?null:r.errors.required),i(),m("ngIf",(t=s.form.get("message"))==null||t.errors==null?null:t.errors.minlength)}}function A(e,l){e&1&&(o(0,"div",14),a(1," Form submitted successfully! "),n())}var N=class e{constructor(l){this.fb=l;this.form=this.fb.group({name:["",[c.required,c.pattern(/^[a-zA-Z ]*$/)]],email:["",[c.required,c.email]],message:["",[c.required,c.minLength(10)]]})}form;submitted=!1;submitSuccess=!1;ngOnInit(){}onSubmit(){this.submitted=!0,this.form.valid&&(console.log(this.form.value),this.submitSuccess=!0,setTimeout(()=>{this.submitted=!1,this.submitSuccess=!1,this.form.reset()},3e3))}static \u0275fac=function(r){return new(r||e)(v(E))};static \u0275cmp=_({type:e,selectors:[["app-forms"]],standalone:!0,features:[b],decls:22,vars:6,consts:[[1,"form-container"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","name"],["id","name","formControlName","name","type","text","placeholder","Enter your name"],["class","error-message",4,"ngIf"],["for","email"],["id","email","formControlName","email","type","email","placeholder","Enter your email"],["for","message"],["id","message","formControlName","message","rows","4","placeholder","Enter your message"],["type","submit",3,"disabled"],["class","success-message",4,"ngIf"],[1,"error-message"],[4,"ngIf"],[1,"success-message"]],template:function(r,t){if(r&1&&(o(0,"div",0)(1,"h2"),a(2,"Contact Form"),n(),o(3,"form",1),C("ngSubmit",function(){return t.onSubmit()}),o(4,"div",2)(5,"label",3),a(6,"Name:"),n(),p(7,"input",4),d(8,w,3,2,"div",5),n(),o(9,"div",2)(10,"label",6),a(11,"Email:"),n(),p(12,"input",7),d(13,G,3,2,"div",5),n(),o(14,"div",2)(15,"label",8),a(16,"Message:"),n(),p(17,"textarea",9),d(18,V,3,2,"div",5),n(),o(19,"button",10),a(20,"Submit"),n()(),d(21,A,2,0,"div",11),n()),r&2){let s,f,g;i(3),m("formGroup",t.form),i(5),m("ngIf",t.submitted&&((s=t.form.get("name"))==null?null:s.errors)),i(5),m("ngIf",t.submitted&&((f=t.form.get("email"))==null?null:f.errors)),i(5),m("ngIf",t.submitted&&((g=t.form.get("message"))==null?null:g.errors)),i(),m("disabled",t.submitted&&!t.form.valid),i(2),m("ngIf",t.submitSuccess)}},dependencies:[I,y,O,P,S,F,h,M,x],styles:[".form-container[_ngcontent-%COMP%]{max-width:500px;margin:0 auto;padding:20px;background-color:#f9f9f9;border-radius:8px;box-shadow:0 0 10px #0000001a}.form-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;color:#333;margin-bottom:20px}.form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:20px}.form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;color:#666}.form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #ddd;border-radius:4px;font-size:16px}.form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:none;border-color:#007bff;box-shadow:0 0 0 2px #007bff40}.form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:vertical}.form-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;width:100%;padding:10px;background-color:#007bff;color:#fff;border:none;border-radius:4px;font-size:16px;cursor:pointer;transition:background-color .3s ease}.form-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.form-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}.form-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#dc3545;font-size:14px;margin-top:5px}.form-container[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%]{color:#28a745;font-size:16px;text-align:center;margin-top:20px;padding:10px;background-color:#d4edda;border-radius:4px}@media (max-width: 600px){.form-container[_ngcontent-%COMP%]{padding:15px}}"]})};export{N as FormsComponent};
