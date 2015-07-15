var app = angular.module('phoneStats', []);

app.controller('StringController', function() {

  this.formType = 'general';

  this.segment_1 = '';
  this.segment_2 = '';
  this.segment_3 = '';
  this.summary = '';

  // methods
  this.resetForm = function() {
    this.segment_1 = '';
    this.segment_2 = '';
    this.segment_3 = '';
    this.summary = '';
    this.formType = 'general';
  };

  this.copyStringToClipboard = function() {

  };

  this.setFormType = function(type) {
    this.formType = type || "general";
  };

});
