let fileCount = 0;

function tabclick(e) {
    let index = e.id.split('_')[2];
    for (let i = 1; i <= fileCount; i++) {
        let file_content_index = document.getElementById('file_content_' + i);
        if(file_content_index.classList.contains('active')){
            file_content_index.classList.remove('active');
        }
        if(i==index){
            file_content_index.classList.add('active'); 
        }
    }
}

function addTab(e) {
    fileCount++;
    let tab = document.createElement('li');
    tab.setAttribute('id', 'file_tab_' + fileCount);
    tab.innerHTML = 'Untitled-' + fileCount;
    tab.setAttribute('onclick', 'tabclick(this)');
    nav.insertBefore(tab, e);

    let tab_panel = document.createElement('div');
    tab_panel.setAttribute('id', 'file_content_' + fileCount);
    tab_panel.setAttribute('class', 'file_content');
    let child = document.createElement('textarea');
    child.setAttribute('class', 'textarea');
    // child.innerText = 'file_editor_' + fileCount;
    tab_panel.appendChild(child);

    let editors = document.getElementById('editors');
    editors.appendChild(tab_panel);

    tabclick(tab);
}