/*
GAME DESIGN:
1 Unit = 100px
           4                2          2
 ###############################################
 #                     |           |           #
2#       STORY         |  OPTIONS  |   HIRE    #
 #                     |           |           #
 #----------+----------+-----------+-----------#
2#MATERIALS |1 SPELLS  |       UPGRADES        #
 #          |----------+-----------+-----------#
 #          |1GATHERING| SETTINGS  |   STATS   #
 #----------+----------+-----------+-----------#
 #     2         2                 |           #
2#              MAP                |  COMBAT   #
 #                                 |           #
 ###############################################
                 5                      2
Concept art at its finest

Story+Options
This should be generated wuth a world as an array. You can either go North, South, East, or West, and have to interact with players and objects
Hire:
A key asset to the idle part of this game. You can hire two types of people:
	Heroes: They are special characters with abilities and are typically better than normal workers
	Common workers: These are simply a number displayed for income with no abilities
Materials:
You gather these on your adventure and over time bringing in the idle aspect
Spells+Gathering:
Mana generates over time and allows you to cast spells which can kill an opponent, do a task, or increase resource production
Upgrades:
These will increase resource production, stronger weapons in battle, and faster crafting times
Settings:
Settings allows you to mute the music, prestiege, change theme(?), view achievements, export/import with save codes
Stats:
	Strength: Increased skill in battle and doing tasks such as chopping lumber or hunting animals
	Dexterity: Increased swimming skill, pickpocketing, and higher chance to strike first
	Health: Health points
	Magic: Number of spells and max mana
	
Map:
Done as an ASCII representation of the world with a key explaining the letters
Combat:
Turn based battle with spells and different attacks. Can consume stock items such as food, or consume special items like potions

GAME CREATION PLAN:
Map is on a 200*200 tile leaving approx 12.5 pixels for each piece of the map
Make map (8x8)...

*/

var w = 0 //Water
var s = 1 //Start for player
var v = 2 //Village
var f = 3 //Forest
var p = 4 //Set path
var o = 5 //ore
var x = 3 //x
var y = 7 //y
var map = [
[" "," "," "," ","f","f"," "," "],
[" ","o"," ","f","f","f","f"," "],
[" "," "," ","f","f","f","f"," "],
["v","v"," ","f","f","f","f"," "],
["v","v"," "," "," ","f","f"," "],
[" "," ","w","w"," "," ","f"," "],
[" ","w","s","w","w"," "," "," "],
[" ","w","w","w","w","w","w"," "]
]






























