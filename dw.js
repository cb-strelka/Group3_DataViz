/* Conrad Dean
 *
 * Drug Wars remake
 * requires: jquery 1.5
 */


/*chagall
kandinsky
konchalovsky
lentulov
lissitky
malevich
petrovvodkin
tatlin
popova
rodchenko
*/

function Place_Object(name){
    this.name = name;
    this.price_differences = {chagall: 1, kandinsky : 1,konchalovsky: 1, lentulov : 1,lissitky: 1, malevich : 1,petrovvodkin: 1, tatlin : 1,popova: 1, rodchenko : 1};

    this.get_price_list = function(){

        chagall_price = item_prices.chagall * this.price_differences.chagall;
        kandinsky_price = item_prices.kandinsky * this.price_differences.kandinsky;
        konchalovsky_price = item_prices.konchalovsky * this.price_differences.konchalovsky;
        lentulov_price = item_prices.lentulov * this.price_differences.lentulov;
        lissitky_price = item_prices.lissitky * this.price_differences.lissitky;
        malevich_price = item_prices.malevich * this.price_differences.malevich;
        petrovvodkin_price = item_prices.petrovvodkin * this.price_differences.petrovvodkin;
        tatlin_price = item_prices.tatlin * this.price_differences.tatlin;
        popova_price = item_prices.popova * this.price_differences.popova;
        rodchenko_price = item_prices.rodchenko * this.price_differences.rodchenko;

        chagall_price= Math.floor(chagall_price);
        kandinsky_price= Math.floor(kandinsky_price);
        konchalovsky_price= Math.floor(konchalovsky_price);
        lentulov_price= Math.floor(lentulov_price);
        lissitky_price= Math.floor(lissitky_price);
        malevich_price= Math.floor(malevich_price);
        petrovvodkin_price= Math.floor(petrovvodkin_price);
        tatlin_price= Math.floor(tatlin_price);
        popova_price= Math.floor(popova_price);
        rodchenko_price= Math.floor(rodchenko_price);

        return {chagall:chagall_price, kandinsky:kandinsky_price, konchalovsky:konchalovsky_price, lentulov:lentulov_price, lissitky:lissitky_price, malevich:malevich_price, petrovvodkin:petrovvodkin_price, tatlin:tatlin_price, popova:popova_price, rodchenko:rodchenko_price};
    };
};


function Player_Object()
{
    this.days_left = 30;
    this.name = "My Painting Collection";
    this.inventory = {chagall : 1, kandinsky: 1,konchalovsky : 1, lentulov: 1,lissitky : 1, malevich: 1,petrovvodkin : 1, tatlin: 1,popova : 1, rodchenko: 1};
    this.money = 100000000;
    this.debt = 1000000;
    this.daily_interest = 0.1;

    this.advance_day = function(){
        if(this.days_left > 0){
            this.days_left = this.days_left - 1;
            this.debt = this.debt*(1+this.daily_interest);
            /* round debt */
            this.debt = Math.floor(this.debt);
        }
        else{
            game_end();
        }
    };
}


/* Game Data */

var player = new Player_Object();

var item_prices = {chagall : 1, kandinsky: 1,konchalovsky : 1, lentulov: 1,lissitky : 1, malevich: 1,petrovvodkin : 1, tatlin: 1,popova : 1, rodchenko: 1};




var moscow_place = new Place_Object("Moscow");
moscow_place.price_differences = {chagall : 1, kandinsky: 1,konchalovsky : 1, lentulov: 1,lissitky : 1, malevich: 1,petrovvodkin : 1, tatlin: 1,popova : 1, rodchenko: 1};

var london_place = new Place_Object("London");
london_place.price_differences = {chagall : 1, kandinsky: 1,konchalovsky : 1, lentulov: 1,lissitky : 1, malevich: 1,petrovvodkin : 1, tatlin: 1,popova : 1, rodchenko: 1};

var new_york_place = new Place_Object("New York");
new_york_place.price_differences = {chagall : 1, kandinsky: 1,konchalovsky : 1, lentulov: 1,lissitky : 1, malevich: 1,petrovvodkin : 1, tatlin: 1,popova : 1, rodchenko: 1};

var st_petersburg_place = new Place_Object("St. Petersburg");
st_petersburg_place.price_differences = {chagall : 1, kandinsky: 1,konchalovsky : 1, lentulov: 1,lissitky : 1, malevich: 1,petrovvodkin : 1, tatlin: 1,popova : 1, rodchenko: 1};

var miami_place = new Place_Object("Miami");
miami_place.price_differences = {chagall : 1, kandinsky: 1,konchalovsky : 1, lentulov: 1,lissitky : 1, malevich: 1,petrovvodkin : 1, tatlin: 1,popova : 1, rodchenko: 1};

var beijing_place = new Place_Object("Beijing");
beijing_place.price_differences = {chagall : 1, kandinsky: 1,konchalovsky : 1, lentulov: 1,lissitky : 1, malevich: 1,petrovvodkin : 1, tatlin: 1,popova : 1, rodchenko: 1};

var vienna_place = new Place_Object("Vienna");
vienna_place.price_differences = {chagall : 1, kandinsky: 1,konchalovsky : 1, lentulov: 1,lissitky : 1, malevich: 1,petrovvodkin : 1, tatlin: 1,popova : 1, rodchenko: 1};

var placeList = [moscow_place,london_place, new_york_place, st_petersburg_place, miami_place, beijing_place,vienna_place ];

for (i = 0; i < placeList.length; i++) {

		var newObj = {
			chagall : Math.random() * 10000000,
			kandinsky: Math.random() * 100000,
			konchalovsky : Math.random() * 100000,
			lentulov: Math.random() * 1000000,
			lissitky : Math.random() * 1000000,
			 malevich: Math.random() * 1000000,
			 petrovvodkin : Math.random() * 1000000,
			 tatlin: Math.random() * 1000000,
			 popova : Math.random() * 1000000,
			 rodchenko: Math.random() * 100000

		}

		placeList[i].price_differences = newObj;


		console.log(placeList[i].get_price_list());
}

console.log(placeList);

var location_map = {"moscow_place":moscow_place, "london_place":london_place, "new_york_place":new_york_place, "st_petersburg_place":st_petersburg_place, "miami_place":miami_place,"vienna_place":vienna_place, "beijing_place":beijing_place };



function refresh_view(){
    /* status bar */
    $("#player_name").text(player.name);
    $("#money").text("$"+player.money.formatMoney(2, '.', ','));
    $("#days_left").text(player.days_left);

    $("#debt").text(player.debt);

    /* inventory box */
    $("#inventory span").each(function(){
        $(this).text(player.inventory[$(this).attr("class")]);
    });

}

function move_to(place){


	console.log(place);
    player.advance_day();



    place = location_map[place];

 console.log(place);

    price_list = place.get_price_list();



    player.price_list = price_list;
    $("#current_location").text(place.name);
    $("#chagall .price").text("$"+price_list.chagall.formatMoney(2, '.', ','));

    $("#kandinsky .price").text("$"+price_list.kandinsky.formatMoney(2, '.', ','));
    $("#konchalovsky .price").text("$"+price_list.konchalovsky.formatMoney(2, '.', ','));
    $("#lentulov .price").text("$"+price_list.lentulov.formatMoney(2, '.', ','));
    $("#lissitky .price").text("$"+price_list.lissitky.formatMoney(2, '.', ','));
    $("#malevich .price").text("$"+price_list.malevich.formatMoney(2, '.', ','));
    $("#petrovvodkin .price").text("$"+price_list.petrovvodkin.formatMoney(2, '.', ','));
    $("#tatlin .price").text("$"+price_list.tatlin.formatMoney(2, '.', ','));
    $("#popova .price").text("$"+price_list.popova.formatMoney(2, '.', ','));
    $("#rodchenko .price").text("$"+price_list.rodchenko.formatMoney(2, '.', ','));

}

function buy_button(item){
    if (item in player.price_list){ //this will just straight up crash, meh.
        price = player.price_list[item];
        max_items = Math.floor(player.money / price);
        player.money = player.money - (max_items*price);  // pay moneys
        player.inventory[item] = player.inventory[item] + max_items;  // get items
        refresh_view();

    }
    else{
        alert("GO SOMEWHERE FIRST DUH");
    }
}

function sell_button(item){
    //sell whole inventory
    if (item in player.price_list){ //this will just straight up crash, meh.
        price = player.price_list[item];
        items = player.inventory[item];
        profit = items*price;
        player.inventory[item] = 0;
        player.money = player.money + profit;
        refresh_view();
    }
    else{
        alert("GO SOMEWHERE FIRST DUH");
    }
}

function submit_loan_shark_request(){
    deposit = parseInt($("#loan_shark_deposit").attr("value"));
    withdraw = parseInt($("#loan_shark_withdraw").attr("value"));

    if (deposit >= 0){
        player.money = player.money - deposit;
        player.debt = player.debt - deposit;
    }
    else{
        alert(deposit+" is not a number you can deposit with.");
    }

    if (withdraw >= 0){
        player.money = player.money + withdraw;
        player.debt = player.debt + withdraw;
    }
    else{
        alert(withdraw+" is not a number you can withdraw with.");
    }

    player.money = player.money < 0 ? 0 : player.money;
    player.debt = player.debt < 0 ? 0 : player.debt;

    $("#loan_shark_deposit").attr("value",0);
    $("#loan_shark_withdraw").attr("value",0);

    refresh_view();


}

function render_new_page(caller_id){
    /* Turn off the old selected item to turn on the new one*/
    $(".active").removeClass("active");
    $("#"+caller_id).addClass("active");

    /* Un-render the current page and render the new one from the
     * caller_id
     */
    $(".current_page").removeClass("current_page");
    $("#"+caller_id+"_page").addClass("current_page");
}

function game_end(){
    /* calculate score and display end page */

    /* add score info to page */
    $(".money_end").text(player.money);
    $(".debt_end").text(player.debt);
    score = player.money-3*player.debt;
    $(".score_end").text(score);
    /* conditional coloring of score */
    score_color = (score > 0)? "green" : "red";
    $(".score_end").css("color",score_color);

    /* show game end */
    $("#game").css("display","none");
    $("#game_end").css("display","block");
}

$(document).ready(function(){
    //add click stuff to ui

    /* adding page buttons */

    $("nav a").each(function(i){
        $(this).click(function(eventObject){
            render_new_page($(this).attr("id"));
        });
        $(this).css("cursor","pointer");
    });

    /* adding location movement links */
    $("#locations li a").each(function(i){
        $(this).click(function(eventObject){
            move_to($(this).attr("id"));
        });
    });

    /* adding buy buttons */
    $("#price_list li a").each(function(i){
        $(this).click(function(eventObject){
            buy_button($(this).attr("id"));
        });
    });

    /* adding sell buttons */
    $("#sell_list li a").each(function(i){
        $(this).click(function(eventObject){
            sell_button($(this).attr("id"));
        });
    });

	  move_to(moscow_place);

    /* first refresh */
    refresh_view();

});


Number.prototype.formatMoney = function(c, d, t){
var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };