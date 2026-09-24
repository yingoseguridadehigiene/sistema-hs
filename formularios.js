// ─────────────────────────────────────────────────────────────
//  LISTA DE FORMULARIOS — Sistema HyS Yingo S.A.
//  Fuente única para TODAS las páginas de obra.
//  Para agregar / quitar / renombrar un formulario, editá solo
//  este archivo y subí el archivo nuevo a la carpeta /formularios.
//  Los archivos viven en la carpeta /formularios del repositorio.
// ─────────────────────────────────────────────────────────────
const FORMULARIOS = [
  { titulo:'Análisis de Trabajo Seguro (ATS)', archivos:[
      {label:'PDF para imprimir', file:'formularios/ATS.pdf', icon:'📄'},
      {label:'Excel editable',     file:'formularios/ATS.xlsx', icon:'📊'} ] },
  { titulo:'Checklist de guinche eléctrico', archivos:[
      {label:'PDF para imprimir', file:'formularios/Checklist_guinche_electrico.pdf', icon:'📄'},
      {label:'Word editable',      file:'formularios/Checklist_guinche_electrico.docx', icon:'📝'} ] },
  { titulo:'Permiso de trabajo en altura', archivos:[
      {label:'PDF para imprimir', file:'formularios/Permiso_trabajo_altura.pdf', icon:'📄'} ] },
  { titulo:'Permiso de trabajo en caliente', archivos:[
      {label:'PDF para imprimir', file:'formularios/Permiso_trabajo_caliente.pdf', icon:'📄'} ] }
];
