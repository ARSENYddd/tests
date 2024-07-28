<template>
    <div>
      <h1>Edit Form</h1>
      <!-- Your form fields go here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditForm',
    props: {
      isForeign: Boolean,
      isJuridical: Boolean,
      title: String,
      tin: String
    },
    methods: {
      fromFormToServer(personInForm) {
        return {
          type: [
            personInForm.isForeign ? 'foreign' : null,
            personInForm.isJuridical ? 'juridical' : 'physical',
          ].filter(Boolean).join('_'),
          tin: personInForm.isForeign ? null : personInForm.tin,
          name: personInForm.isJuridical ? null : personInForm.title,
          foreign_tin: personInForm.isForeign ? personInForm.tin : null,
          company_title: personInForm.isJuridical ? personInForm.title : null
        };
      }
    }
  };
  </script>