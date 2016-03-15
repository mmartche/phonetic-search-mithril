m('.about content-center',[
  m('h1','Phonetic'),
  m('hr'),
  m('form.btn-group[role="group"][onsubmit={u.silence()}]',[
    m('.phonetic',[
      m('label.content-center','Word to be Checked'),
      m('.input-group', [
        m('input#text_tempo.form-control',{placeholder:"Write...",onkeyup:ctrl.phonetic})
      ])
    ])
  ]),
  m('hr'),
  ctrl.values
])