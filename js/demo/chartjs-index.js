$(function () {
    var doughnutData = {
        labels: ["Active","Inactive"],
        datasets: [{
                        data: [12,2],
                        backgroundColor: ["#a3e1d4","#dedede"]
                   }]
    } ;
    var doughnutOptions = {
        legend: {display: true},
        responsive: true,
        title: {display: true, text: 'Total Licenses: 14', verticalAlign: 'center', textAlign: 'center', textBaseline: 'middle' }
    };



    var ctx4 = document.getElementById("doughnutChart").getContext("2d");
    new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});


    var lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [

            {
                label: "Alerts",
                backgroundColor: 'rgba(26,179,148,0.5)',
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90],
                stack: 'Stack 0',
            },{
                label: "Intrusions",
                backgroundColor: 'rgba(220, 220, 220, 0.5)',
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40],
                stack: 'Stack 1',
            }
        ]
    };
    var lineOptions = {
    legend: {display:true}, responsive: true,
        scales: {
            xAxes: [{ stacked: true }],
            yAxes: [{ stacked: true }]
        },
        interaction: {
            intersect: false,
        },
    }
var ctx = document.getElementById("lineChart").getContext("2d");
new Chart(ctx, {type: 'bar', data: lineData, options:lineOptions});
});