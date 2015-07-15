var app = angular.module('phoneStats', []);
var clipboard = require('clipboard') || null;

app.controller('StringController', function() {

  this.formType = 'general';
  this.formTypes = ['general', 'software', "email", "transfer", "service", "print"];

  function Segment(isHidden, label, description) {
    this.info = '';
    this.isHidden = isHidden;
    this.label = label;
    this.description = description;
  }

  // this.segment_1 = '';
  // this.segment_2 = '';
  // this.segment_3 = '';
  // this.summary = '';

  this.segment_1 = new Segment(false, "Was it a ticket update?", "Description goes here...");
  this.segment_2 = new Segment(true, "", "");
  this.segment_3 = new Segment(true, "", "");
  this.summary = '';

  // methods
  this.resetForm = function() {
    this.segment_1.info = '';
    this.segment_2.info = '';
    this.segment_3.info = '';

    this.summary = '';
  };

  this.copyStringToClipboard = function() {
    if (clipboard === null) {
      alert("This does not work through the browser!");
    } else {
      var result = '';
      if (!this.segment_1.isHidden) { result += this.segment_1.info + ";"; }
      if (!this.segment_2.isHidden) { result += this.segment_2.info + ";"; }
      if (!this.segment_3.isHidden) { result += this.segment_3.info + ";"; }
      result += this.summary;
      clipboard.writeText(result);
    }

  };

  this.setFormType = function(type) {
    this.formType = type || "general";

    if (this.formType == "general") {
      this.segment_1.isHidden = false;
      this.segment_1.label = "Was it a ticket update?";
      this.segment_2.isHidden = true;
      this.segment_2.label = "";
      this.segment_3.isHidden = true;
      this.segment_3.label = "";
    } else if (this.formType == "software") {
      this.segment_1.isHidden = false;
      this.segment_1.label = "Software used";
      this.segment_2.isHidden = false;
      this.segment_2.label = "Supported? (S, NS)";
      this.segment_3.isHidden = false;
      this.segment_3.label = "Installation / Removal (Y/N)";
    } else if (this.formType == "email") {
      this.segment_1.isHidden = false;
      this.segment_2.label = "Program used";
      this.segment_2.isHidden = true;
      this.segment_2.label = "";
      this.segment_3.isHidden = true;
      this.segment_2.label = "";
    } else if (this.formType == "transfer") {
      this.segment_1.isHidden = false;
      this.segment_1.label = "Caller Name";
      this.segment_2.isHidden = true;
      this.segment_2.label = "";
      this.segment_3.isHidden = true;
      this.segment_3.label = "";
    } else if (this.formType == "service") {
      this.segment_1.isHidden = false;
      this.segment_1.label = "Referred user to form?";
      this.segment_2.isHidden = true;
      this.segment_2.label = "";
      this.segment_3.isHidden = true;
      this.segment_3.label = "";
    } else if (this.formType == "print") {
      this.segment_1.isHidden = false;
      this.segment_1.label = "Department";
      this.segment_2.isHidden = false;
      this.segment_2.label = "Printer Name";
      this.segment_3.isHidden = true;
      this.segment_3.label = "";
    } else {
      alert("Error! Could not set the form type. Please let Chuck know!");
    }

  };

});
