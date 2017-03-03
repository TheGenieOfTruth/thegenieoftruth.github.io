//Global namespace slots: GMD
//GMD stands for global module data. This is used for all aspects of the game that aren't really part of the game
//Eg: GUI, Tabs
var GMD = {
	tab_selected: load("tab_selected", "lord"),
	tabs: [],
	update: function() {
		//Save the selected tab so the user can come back to the tab they last had
		//Load handled: TRUE
		function update(name){
			save(name,GMD[name])
		}
		update("tab_selected");
		update("abbreviation_selected")
	},
	/*
	Any time true is referenced in a list, it means to switch to scientific notation
	abbreviations:{
		extended:[...],
		short:[...],
		science:true
	},*/
	abbreviation_selected: load("abbreviation_selected","science")

};
//References
var gmd = GMD;
var Gmd = GMD;
var GlobalModuleData = GMD;
var globalModuleData = GMD;
var g_m_d = GMD;
var G_M_D = GMD;
var global_module_data = GMD;
var global_Module_Data = GMD;
var Global_Module_Data = GMD;
//If you mess it up, you had 8 aliases. That is depressing.
