let apiMyprojectsApi = new TempApi.MyprojectsApi();import TempApi from '../src/index';document.getElementById('ij2zi').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '/';}};document.getElementById('i5s31').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#submenu1';}};document.getElementById('i86xr').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#submenu2';}};document.getElementById('i9m85').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#submenu3';}};window.onload = () => {let myprojectsId = window.location.pathname.replace('/view/','');apiMyprojectsApi.getmyprojects( myprojectsId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); }});};