let apiMyprojectsApi = new TempApi.MyprojectsApi();import TempApi from '../src/index';let myprojects = new TempApi.Myprojects();document.getElementById('iq7lk').onclick = (event) => {
    event.preventDefault();
    myprojects['ptitle'] = document.querySelector("[annotationname = 'ptitle']").value;apiMyprojectsApi.createmyprojects( myprojects, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); { 
      let transitionId = '';
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iq7lk")) === true
        ) {
          transitionId = value._id;
        }
      });
     location.href= '/home/' + transitionId;}}});};window.onload = () => {};