sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller,Filter,FilterOperator) {
	"use strict";

	return Controller.extend("com.test.Z_Filtering.controller.Display", {
		onInit: function () {
			//
		},
		onFilterInvoices : function (oEvent) {

			// build filter array
			var aFilter = [];
			//debugger;
			var sQuery = oEvent.getParameter("query");
			//var sQuery = 5;
			if (sQuery) {
				aFilter.push(new Filter("User", FilterOperator.Contains, sQuery));
				//aFilter.push(new Filter("City", FilterOperator.Contains, sQuery));
				//aFilter.push(new Filter("Age", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.getView().byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
	});
});