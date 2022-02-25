let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';document.getElementById('i9ifh').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '/';}};document.getElementById('izijg').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#submenu1';}};document.getElementById('izxef').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#submenu2';}};document.getElementById('ibp9f').onclick = (event) => {
    event.preventDefault();
    { window.document.location = '#submenu3';}};document.getElementById('ibzp56').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = '';
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ibzp56")) === true
        ) {
          transitionId = value._id;
        }
      });
     location.href= '/view/' + transitionId;}};document.getElementById('iihc8h').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/home/','');
      if(projectId === '/home' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('iihc8h')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/home' ;}}});};document.getElementById('iiitgf').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = '';
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iiitgf")) === true
        ) {
          transitionId = value._id;
        }
      });
     location.href= '/view/' + transitionId;}};document.getElementById('i9ufx6').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/home/','');
      if(projectId === '/home' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('i9ufx6')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('il6v1j').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = '';
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("il6v1j")) === true
        ) {
          transitionId = value._id;
        }
      });
     location.href= '/view/' + transitionId;}};document.getElementById('i9ue35').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/home/','');
      if(projectId === '/home' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('i9ue35')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('i3na2e').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = '';
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i3na2e")) === true
        ) {
          transitionId = value._id;
        }
      });
     location.href= '/view/' + transitionId;}};document.getElementById('iix87e').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/home/','');
      if(projectId === '/home' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('iix87e')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('i25e16').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = '';
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i25e16")) === true
        ) {
          transitionId = value._id;
        }
      });
     location.href= '/view/' + transitionId;}};document.getElementById('iyvd2l').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/home/','');
      if(projectId === '/home' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('iyvd2l')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('itpw38').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = '';
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("itpw38")) === true
        ) {
          transitionId = value._id;
        }
      });
     location.href= '/view/' + transitionId;}};document.getElementById('io38ra').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/home/','');
      if(projectId === '/home' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('io38ra')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('i6ciik').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = '';
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i6ciik")) === true
        ) {
          transitionId = value._id;
        }
      });
     location.href= '/view/' + transitionId;}};document.getElementById('i44vpp').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/home/','');
      if(projectId === '/home' || projectId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('i44vpp')) === true){
            projectId = value._id;
          }
        })
      }
   apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ixlx43").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pptitle']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].pptitle;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'pptitle'){
        subDataElements[i].textContent = data[data.length -i -1].pptitle;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
    });
    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};