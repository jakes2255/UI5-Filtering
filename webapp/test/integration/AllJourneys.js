/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/test/Z_Filtering/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/test/Z_Filtering/test/integration/pages/Display",
	"com/test/Z_Filtering/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.test.Z_Filtering.view.",
		autoWait: true
	});
});