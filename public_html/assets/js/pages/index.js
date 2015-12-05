<!-- ============================================================== -->
$(document).ready(function () {

    var $window = $(window);
    var $pane = $('#pane1');

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 1010) {
            $(".content-page").addClass('narrow');
            console.log("sadsad");
        } else $(".content-page").removeClass('narrow');

    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);


    $('.yay').click(function () {

        var qStart = $('#quickStart');

        switch ($(this).prev().text()) {
            case "Do you have money you can spare?":
            {
                qStart.fadeOut(500, function () {
                    $(this).children().first().text('Are you interested in participating in the network?');
                });
                qStart.fadeIn(500);
            }
                break;
            case "Do you have IT skills?":
            {
                qStart.fadeOut(500, function () {
                    $('#finalState').children().first().text('Receive bitcoins for your bug reports!');
                    $('#finalState').children().last().append(
                        "<p>If you have IT skills, you may consider joining a bug bounty program.</p>"
                        + "<p>Many websites and software developers offer a deal by which individuals can receive "
                        + "compensation for reporting bugs. These bug bounty programs "
                        + "allow the developers to discover and resolve bugs before the general public is aware of "
                        + "them, preventing incidents of widespread abuse.<br><br></p>"
                        + "<p>Pros:</p>"
                        + "<p><ul><li>Get rewarded for exposing web-based security issues</li>"
                        + "<li>Be the first to learn and try out new platforms/web-based services</li>"
                        + "<li>May lead to a long term career if you're good at it.</li></ul></p>"
                        + "<p>Cons:</p>"
                        + "<p><ul><li>Competition, other bug hounter compete with you for the reward</li>"
                        + "<li>Must follow specific requirements in order to be qualified for a valid bounty</li></ul></p>"
                        + "<br><br>"
                        + "<p><a href='https://www.kraken.com/security/bug-bounty'>Kraken</a> and <a href='https://www.pay4bugs.com/'>Pay4Bugs</a> are some of the websites dedicated for this purpose.</p>");
                    $('#finalState').fadeIn(500);
                });
            }
                break;
            case "Are you selling products or services?":
            {
                qStart.fadeOut(500, function () {
                    $('#finalState').children().first().text('Get paid in bitcoins!');
                    $('#finalState').children().last().append(
                        "<p>If you have the time and some skill, service/product or content worth paying for, you may want to explore other options to earn your bitcoins.</p>"
                        + "<p>First, set up your bitcoin wallet to store bitcoins. You can download a local wallet from <a href='https://bitcoin.org/en/choose-your-wallet'>bitcoin's official website</a> but make sure you keep a copy of your data backed up. Once you’ve created a wallet, you get an address like this: <code>1K2CoA2JE3hXubkroTTAmTMn2yEDcfdeDM</code></p>"
                        + "<p>This (case-sensitive) chain of letters and numbers is a direct way to send bitcoins to your wallet. Second, advertise your service or product and be sure to state that you accept Bitcoin as a form of payment. Done!</p>"
                        + "<p>Pros:</p>"
                        + "<p><ul><li>Accept payments from clients globally</li>"
                        + "<li>No chargebacks issues</li>"
                        + "<li>Set-up cost for accepting Bitcoin as payment is much less than other forms of payments</li></ul></p>"
                        + "<p>Cons:</p>"
                        + "<p><ul><li>Majority of customers doesn’t pay in bitcoins, yet</li></ul></p>");
                    $('#finalState').fadeIn(500);
                });
            }
                break;
            case "Are you creative?":
            {
                qStart.fadeOut(500, function () {
                    $('#finalState').children().first().text('Publish content on Streamium!');
                    $('#finalState').children().last().append(
                        "<p><a href='https://streamium.io/'>Streamium</a> is startup is a fully video streaming application that uses bitcoin for pauments, allowing conten producers to get paid in real time.</p>"
                        + "<p>The platform is designed to facilitate teaching/tutoring/mentoring, monetizing geo-cams, monetizing sporting events that don't have large enough crows to allow other means of monetization (like adverstisements).</p>"
                        + "<p>Pros:</p>"
                        + "<p><ul><li>Great for video producers with a niche target audience</li>"
                        + "<li>No service fees</li>"
                        + "<li>No middlemen</li></ul></p>"
                        + "<p>Cons:</p>"
                        + "<p><ul><li>It’s still in Beta and there are still security/bug fixes to be made (as stated on their site's disclaimer)</li></ul></p>");
                    $('#finalState').fadeIn(500);
                });
            }
                break;
            case "Are you interested in participating in the network?":
            {
                qStart.fadeOut(500, function () {
                    $('#finalState').children().first().text('Start mining!');
                    $('#finalState').children().last().append(
                        "<p>If you like technology and have some very powerful computers around, you can try bitcoin mining.</p>"
                        + "<p>You can buy hardware mining devices (called ASIC chips) to start mining bitcoins on your own. "
                        + "Currently, with the increase of mining difficulty, using your personal computer to mine is not worth anymore.</p>"
                        + "<p>Before investing in mining hardware, consider the cost of your <a href='http://www.coinwarz.com/calculators/bitcoin-mining-calculator/?h=5500.00&p=18880.00&pc=0.05&pf=0.00&d=46684376316.86030000&r=25.00000000&er=248.79000000&hc=2300.00'>bitcoin mining operation vs return on investment</a>. "
                        + "As it stands, mining solo is pretty much deprecated. The process of finding blocks is now so popular and the difficulty "
                        + "of finding a block so high that it could take over three years to generate any coins.</p><p>While you could simply set a "
                        + "machine aside and have it run the algorithms endlessly, the energy cost and equipment depreciation will eventually cost more than the actual bitcoins are worth.<br><br></p>"
                        + "<p>Pros:</p>"
                        + "<p><ul><li>Can be very profitable if power cost is low and you already have the hardware/computing power needed</li></ul></p>"
                        + "<p>Cons:</p>"
                        + "<p><ul><li>High cost of electricity can make bitcoin mining unprofitable</li>"
                        + "<li>Expensive cost of mining hardware</li>"
                        + "<li>Higher computing power required & increasing difficulty to mine bitcoins make mining hardware obsolete very fast</li></ul></p><br><br>"
                        + "<h4>Bitcoin Mining Hardware Comparison</h4>"
                        + "<div class='table-responsive'><table class='table table-hover'><tbody><tr><th>Manufacturer</th><td>AntMiner S5</td><td>AntMiner S5</td><td>AntMiner S5</td></tr></tbody></table></div>");
                    $('#finalState').fadeIn(500);
                });
            }
                break;
            case "Do you need a large quantity?":
            {
                qStart.fadeOut(500, function () {
                    $('#finalState').children().first().text('Buy from a bitcoin exchange!');
                    $('#finalState').children().last().append(
                        "<p>Assuming you have some cash to spend, you can simply find an outlet to sell you bitcoins directly. This is the fastest way to get your hands on some bitcoins, at least for now.</p>"
                        + "<p>Bitcoin exchange is ideal for people who intend to acquire bitcoins as a speculative vehicle just like shares on the stock market: you buy low, sell high, repeat. This is the most cost-effective way as exhanges charge much less in terms of fees compared to how much you end paying if you buy from a bitcoin ATM. Some legitimate exchanges may require that you provide them wiith proof of ID and address to make sure you are not involved in any shady schemes, such as money-laundering, so it takes about one or two working days to validate you account.<br><br></p>"
                        + "<p>Pros:</p>"
                        + "<p><ul><li>Low fees</li>"
                        + "<li>Access to more liquidity</li>"
                        + "<li>Online wallet service</li>"
                        + "<li>Escrow service between traders</li>"
                        + "<li>Everything is done online</li></ul></p>"
                        + "<p>Cons:</p>"
                        + "<p><ul><li>Bank transfers can be slow and costly</li>"
                        + "<li>Must provide valid proof of ID and current address</li>"
                        + "<li>Counterparty risk can be high with non-legit exchange</li></ul></p>"
                        + "<br><br>"
                        + "<p style='text-align:center'>There are several bitcoin exchange websites, we suggest using one of the following:<br><a href='https://gatecoin.com/'>Gatecoin</a> | <a href='https://btc-e.com/'>BTC-E</a> | <a href='https://cex.io/'>CEX.IO</a></p>");
                    $('#finalState').fadeIn(500);
                });
            }
                break;
            case "Are you a good negotiator?":
            {
                qStart.fadeOut(500, function () {
                    $('#finalState').children().first().text('Buy bitcoins in-person!');
                    $('#finalState').children().last().append(
                        "<p>It's pretty obvious that uou can buy bitcoins directly from another person who's looking to sell them.</p>"
                        + "<p>If you don't know any sellers you can check forums dedicated for that purpose or other sites such us <a href='https://localbitcoins.com/'>Local Bitcoins</a>. Since there is no middleman to settle any payment disputes, try making deals with a regular or well rated bitcoin seller/buyer to minimize the risks of a bitcoin-trade going bad.<br><br></p>"
                        + "<p>Pros:</p>"
                        + "<p><ul><li>No questions asked</li>"
                        + "<li>Some websites have a reputation system so you can know who to trust</li>"
                        + "<li>No need to submit your ID or address</li></ul></p>"
                        + "<p>Cons:</p>"
                        + "<p><ul><li>Must use cash</li>"
                        + "<li>Physical presence required on every trade</li>"
                        + "<li>No escrow service</li>"
                        + "<li>Potential target for theft/robbery</li></ul></p>");
                    $('#finalState').fadeIn(500);
                });
            }
                break;
            default:
                break;
        }
    });

    $('.nay').click(function () {

        var qStart = $('#quickStart');

        switch ($(this).prev().prev().text()) {
            case "Do you have money you can spare?":
            {
                qStart.fadeOut(500, function () {
                    $(this).children().first().text('Do you have IT skills?');
                });
                qStart.fadeIn(500);
            }
                break;
                break;
            case "Do you have IT skills?":
            {
                qStart.fadeOut(500, function () {
                    $(this).children().first().text('Are you selling products or services?');
                });
                qStart.fadeIn(500);
            }
                break;
                break;
            case "Are you selling products or services?":
            {
                qStart.fadeOut(500, function () {
                    $(this).children().first().text('Are you creative?');
                });
                qStart.fadeIn(500);
            }
                break;
            case "Are you creative?":
            {
                qStart.fadeOut(500, function () {
                    $('#finalState').children().first().text('Use a bitcoin faucet!');
                    $('#finalState').children().last().append(
                        "<p>If you have no cash or money to spare and don't want to buy costly mining hardware, there are still ways to get bitcoins.</p>"
                        + "<p>One easy ways to get bitcoins for free is through a bitcoin faucet.<blockquote>Faucet: It is a website that gives out “free” bitcoins (BTC) in exchange for doing a simple task, such as clicking on an advert, solving a CAPTCHA, or viewing a webpage for a certain amount of time. Just as the name suggests, you can get bitcoins for free but in very small amounts like the drops of water from a faucet—in this case, just a very small fraction of a bitcoin in terms of Satoshis. They are free, but you won’t get rich waiting on it.</blockquote></p>"
                        + "<p>Pros:</p>"
                        + "<p><ul><li>Good start for bitcoin-starters to earn bitcoins for free</li>"
                        + "<li>Something to do on the side while you’re working on your computer all day</li></ul></p>"
                        + "<p>Cons:</p>"
                        + "<p><ul><li>Cost of running your computer all day is higher than the amount of bitcoins you can earn</li></ul></p>");
                    $('#finalState').fadeIn(500);
                });
            }
                break;
            case "Are you interested in participating in the network?":
            {
                qStart.fadeOut(500, function () {
                    $(this).children().first().text('Do you need a large quantity?');
                });
                qStart.fadeIn(500);
            }
                break;
            case "Do you need a large quantity?":
            {
                qStart.fadeOut(500, function () {
                    $(this).children().first().text('Are you a good negotiator?');
                });
                qStart.fadeIn(500);
            }
                break;
            case "Are you a good negotiator?":
            {
                qStart.fadeOut(500, function () {
                    $('#finalState').children().first().text('Use a bitcoin ATM!');
                    $('#finalState').children().last().append(
                        "<p>Although they are still rare some cites like Hong Kong have several bitcoin ATMs in operation.</p>"
                        + "<p>If you are looking to buy bitcoins quickly, and don't mind paying the charges made for using the service, buying from a bitcoin ATM may be a good choice. Just be sure not to lose the receipt that contains the password to spend your bitcoins.<br><br></p>"
                        + "<p>Pros:</p>"
                        + "<p><ul><li>Quick</li>"
                        + "<li>Easy</li>"
                        + "<li>No ID verification needed</li>"
                        + "<li>No questions asked</li></ul></p>"
                        + "<p>Cons:</p>"
                        + "<p><ul><li>Potential target for theft/robbery</li>"
                        + "<li>Physical presence required</li>"
                        + "<li>High fees are charged for using this service</li>"
                        + "<li>Bitcoin purchase limited to smaller amounts</li></ul></p>");
                    $('#finalState').fadeIn(500);
                });
            }
                break;
            default:
                break;
        }
    });

    $('#addUser').click(function () {

            var userID = $('#userID').val();
            var userHW = $('#userHW').val();
            var table = $('#userTable>tbody');

            if (userID.length < 1 || userHW == "Choose your hardware...") {
                alert('Please enter ID and choose hardware.')
                return;
            }

            if (table.html().indexOf("<td>" + userID + "</td>") > -1) {
                alert('User ID already exists in table');
                return;
            }

            if ($('#userTable>tbody>tr>td').text()[0] == "-")
                table.empty();

            var BTCid = "userID_" + userID;
            table.append('<tr><td>' + userID + '</td><td>' + userHW + '</td><td id=' + BTCid + '>0.0</td><td><span class="label label-success">Active</span></td></tr>');

        }
    );

    console.log("Block 0 is starting");
    load_charts();

});

function resetQuickStart() {
    $('#quickStartMain').fadeOut(500, function () {
        $('#quickStartMain').empty();
        $('#quickStartMain').append('<div class="widget-content padding" style="display: block;" id="quickStart">'
            + '<button class="btn btn-primary btn-lg btn-block disabled" type="button">Do you have money you can spare?</button>'
            + '<button class="btn btn-success btn-lg btn-block yay" type="button">Yes</button>'
            + '<button class="btn btn-danger btn-lg btn-block nay" type="button">No</button>'
            + '<br><br>'
            + '</div>'
            + '<div class="widget-content padding" style="display:none" id="finalState">'
            + '<button class="btn btn-warning btn-lg btn-block disabled"  type="button"></button>'
            + '<div class="alert alert-warning" style="text-align: justify;margin-top:35px"></div>'
            + '</div>'
            + '<p id="guideNote">This quick start guide was inspired by <a href="https://gatecoin.com/blog/2015/06/How-to-get-BTC.png">Gatecoin\'s How to Get Bitcoins Infogram Guide</a>.</p>'
            + '<hr>'
            + '</div>');
    });
    $('#quickStartMain').fadeIn(500);
}

// Charts Area //

window.setInterval(function () {
    load_charts();
}, 2000);

// Graph points //
var data_points = [];
var data_point = 0;
var block_counter = 0;
var block_no = 0;

function load_charts() {

    total_spd = 0;
    no_users = $('#userTable').find('> tbody > tr').length;

    // Get data from table info
    // console.log("--- TABLE ---");
    $('#userTable').find('> tbody > tr').each(function (i, row) {
        // console.log(i, row.innerHTML);
        total_spd += parseInt(row.innerHTML.split('~')[1].split(' ')[0]);
    });

    mining_diff = total_spd * 10;

    if (no_users != 0)
        avg_spd = total_spd / no_users;
    else
        avg_spd = 0;
    // console.log("avg_spd: " + avg_spd);

    data_points[data_point] = {
        time: Math.round(+new Date() / 1000),
        avg_spd: avg_spd,
        total_spd: total_spd,
        mining_diff: mining_diff
    };
    /* DEBUG LOGS
     console.log("--- DATA POINTS ---");
     for(var i=0; i<data_points.length; i++){
     console.log("Index: " + i);
     for(var key in data_points[i]) {
     console.log("key: " + key + "\tvalue: " + data_points[i][key]);
     }
     } */
    data_point++;
    if (data_point == 10)
        data_point = 0;

    block_counter++;
    if (block_counter == 10) {
        console.log("Block " + block_no + " has finished. Giving coins to miners.");
        $('#userTable').find('> tbody > tr').each(function (i, row) {
            miner_spd = parseInt(row.innerHTML.split('~')[1].split(' ')[0]);
            awarded_coins = (miner_spd / total_spd) * 25;
            var id = parseInt(i)+1;
            console.log($("#userID_" + id));
            
            $("#userID_" + id).html(parseFloat($("#userID_" + id).innerHTML) + awarded_coins);
        });
        block_no++;
        console.log("Block " + block_no + " is starting.");
        block_counter = 0;
    }

    $("#morris-home").empty();
    //MORRIS
    window.morris2 = Morris.Line({
        element: 'morris-home',
        padding: 20,
        behaveLikeLine: true,
        gridEnabled: false,
        gridLineColor: '#dddddd',
        axes: true,
        resize: true,
        smooth: false,
        pointSize: 3,
        lineWidth: 2,
        fillOpacity: 0.85,
        data: data_points,
        lineColors: ['#ABC8E2', '#183152', '#fe9834'],
        xkey: 'time',
        redraw: true,
        ykeys: ['avg_spd', 'total_spd', 'mining_diff'],
        labels: ['Average Speed', 'Total Speed', 'Mining Difficulty'],
        hideHover: 'auto'
    });
}


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}