/* Conrad Dean
 *
 * Drug Wars remake
 * requires: jquery 1.5
 */

// malevich
// kandinsky

function Place_Object(name){
    this.name = name;
    this.price_differences = {apples: 1, oranges : 1};
    this.get_price_list = function(){
        apples_price = item_prices.apples * this.price_differences.apples;
        oranges_price = item_prices.oranges * this.price_differences.oranges;

        apples_price= Math.floor(apples_price);
        oranges_price= Math.floor(oranges_price);

        return {apples:apples_price, oranges:oranges_price};
    };
};


function Player_Object()
{
    this.days_left = 30;
    this.name = "My Painting Collection";
    this.inventory = {apples : 0, oranges: 0};
    this.money = 200;
    this.debt = 200;
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

var item_prices = {apples : 10, oranges : 100};

var moscow = new Place_Object("Moscow");
moscow.price_differences = {apples: .5, oranges: 2};
var london = new Place_Object("London");
london.price_differences = {apples: 2, oranges: .5};

var new_york = new Place_Object("New York");
new_york.price_differences = {apples: 2, oranges: .5};
var st_petersburg = new Place_Object("St. Petersburg");
st_petersburg.price_differences = {apples: 2, oranges: .5};



var location_map = {"moscow":moscow, "london":london};




function refresh_view(){
    /* status bar */
    $("#player_name").text(player.name);
    $("#money").text(player.money);
    $("#days_left").text(player.days_left);

    $("#debt").text(player.debt);

    /* inventory box */
    $("#inventory span").each(function(){
        $(this).text(player.inventory[$(this).attr("class")]);
    });

}

function move_to(place){
    player.advance_day();
    place = location_map[place];
    price_list = place.get_price_list();
    player.price_list = price_list;

    $("#current_location").text(place.name);
    $("#apples .price").text(price_list.apples);
    $("#oranges .price").text(price_list.oranges);
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


    /* first refresh */
    refresh_view();

});
