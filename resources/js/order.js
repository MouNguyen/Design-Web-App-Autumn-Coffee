
// add event click row
function addRowHandlers() {
  var table = document.getElementById("orderTable");
  var rows = table.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler = function(row) {
      return function() {
        // var cell = row.getElementsByTagName("td")[0];
        // var id = cell.innerHTML;
        // alert("id:" + id);
        $(".layout-background").css("display","block");
        $(".popup-order-item").css("display","grid");
      };
    };
    currentRow.onclick = createClickHandler(currentRow);
  }
}
//admin
function loadDatatableReport() {
	//Fixed data

	var data = [
    		{
    			"STT": 1,
    			"ID": "CF001",
          "Name": "Cà phê",
          "Amount": "200,000 ly",
          "SalePrice": "5,000,000đ",
           "Profits":"3,000,000đ",
          "Capital":"2,000,000",
    		},
        {
    			"STT": 2,
    			"ID": "CF002",
          "Name": "Cà phê Sữa",
          "Amount": "200,000 ly",
          "SalePrice": "5,000,000đ",
           "Profits":"3,000,000đ",
          "Capital":"2,000,000",
    		},
        {
    			"STT": 3,
    			"ID": "TS001",
          "Name": "Trà sữa",
          "Amount": "200,000 ly",
          "SalePrice": "5,000,000đ",
           "Profits":"3,000,000đ",
          "Capital":"2,000,000",
    		}
    	];
      var table = document.getElementById('tb-report')

      for (var i = 0; i < data.length; i++){
        var row = `<tr>
                <td>${data[i].STT}</td>
                <td>${data[i].ID}</td>
                <td>${data[i].Name}</td>
                <td>${data[i].Amount}</td>
                <td>${data[i].SalePrice}</td>
                <td>${data[i].Profits}</td>
                <td>${data[i].Capital}</td>
              </tr>`
        table.innerHTML += row
      }
}
//
function loadDatatableHistory() {
	//Fixed data

	var dataHistoryReward = [
    		{
    			"STT": 1,
    			"CoinRedeem": "500",
          "DateOfChange": "15/12/2020",
          "Gift": "voucher 1",
    			"Note": "annnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnns",
    		},
    		{
    			"STT": 2,
    			"CoinRedeem": "700",
          "DateOfChange": "25/12/2020",
          "Gift": "voucher 1",
    			"Note": "annnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnns",
    		},
        {
    			"STT": 3,
    			"CoinRedeem": "100",
          "DateOfChange": "05/12/2020",
          "Gift": "voucher 1",
    			"Note": "annnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn sssssssssssssssssssssssssssssssnnnssssssssssssns",
    		}
    	];

    	// table = $('#tb-history-reward').DataTable({
    	// "processing": true,
    	// data: dataHistoryReward,
    	// columns:[
    	// 	{ data: 'STT' },
    	// 	{ data: 'CoinRedeem' },
    	// 	{ data: 'DateOfChange' },
    	// 	{ data: 'Note' }
    	// ]
      // });
      var data =dataHistoryReward;
      var table = document.getElementById('tb-history-reward')

      for (var i = 0; i < data.length; i++){
        var row = `<tr>
                <td>${data[i].STT}</td>
                <td>${data[i].CoinRedeem}</td>
                <td>${data[i].DateOfChange}</td>
                <td>${data[i].Gift}</td>
                <td>${data[i].Note}</td>
              </tr>`
        table.innerHTML += row


      }
}
function loadDatatableOrder() {
	//Fixed data

	var data = [
    		{
    			"STT": 1,
    			"ID": "HD151220",
          "Amount": "5",
          "TotalPrice": "205,000 đ",
          "OrderDate": "15/12/2020",
           "StatusOrder":"Đã hoàn thành",
          "ShipmentAddress":"22 Hồ Xuân Hương Quận 3",
    		},
        {
    			"STT": 2,
    			"ID": "HD161220",
          "Amount": "6",
          "TotalPrice": "255,000 đ",
          "OrderDate": "16/12/2020",
          "StatusOrder":"Đã hoàn thành",
          "ShipmentAddress":"22 Hồ Xuân Hương Quận 3",

    		},
        {
    			"STT": 3,
    			"ID": "HD171220",
          "Amount": "10",
          "TotalPrice": "350,000 đ",
          "OrderDate": "17/12/2020",
          "StatusOrder":"Đang giao",
          "ShipmentAddress":"22 Hồ Xuân Hương Quận 3",
    		}
    	];
      var table = document.getElementById('tb-customer-order')

      for (var i = 0; i < data.length; i++){
        var row = `<tr>
                <td>${data[i].STT}</td>
                <td>${data[i].ID}</td>
                <td>${data[i].Amount}</td>
                <td>${data[i].TotalPrice}</td>
                <td>${data[i].OrderDate}</td>
                <td>${data[i].StatusOrder}</td>
                <td>${data[i].ShipmentAddress}</td>
                <td>></td>
              </tr>`
        table.innerHTML += row
      }
}
function loadDatatableOrderItem() {
	//Fixed data

	var data = [
    		{
    			"STT": 1,
    			"Product": "Trà Đào Cảm Sả",
          "Amount": "2",
          "TotalPrice": "110,000 đ",
          "Note": "Mua thêm trân châu",
    		},
        {
    			"STT": 2,
    			"Product": "Cà Phê Sữa",
          "Amount": "1",
          "TotalPrice": "35,000 đ",
          "Note": "Mua thêm trân châu",
    		},
        {
    			"STT": 3,
    			"Product": "Cà phê đá",
          "Amount": "2",
          "TotalPrice": "60,000 đ",
          "Note": "Mua thêm trân châu"
    		}
    	];
      var table = document.getElementById('tb-order-item')

      for (var i = 0; i < data.length; i++){
        var row = `<tr>
                <td>${data[i].STT}</td>
                <td>${data[i].Product}</td>
                <td>${data[i].Amount}</td>
                <td>${data[i].TotalPrice}</td>
                <td>${data[i].Note}</td>
              </tr>`
        table.innerHTML += row
      }
}
$(document).ready(function(){
  //admin
    setTabActive();
    loadDatatableHistory();
    loadDatatableOrder();
    loadDatatableOrderItem();

    addRowHandlers();
    $(".tab-1").addClass("active");
    // $("#go-to-signup").click(function(){
    //     // $(".signin").hide( 1000 );
    //     $(".signin").css("z-index","-1");
    //     $(".signup").css("z-index","1");

    // });
    // $("#turn-back-signin").click(function(){
    //     // $(".signin").hide( 1000 );
    //     $(".signup").css("z-index","-1");
    //     $(".signin").css("z-index","1");

    // });
  });
  // tab control
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

// show popup form
function showPopupHistory(){
  $(".layout-background").css("display","block");
  $(".popup-history-reward").css("display","block");
}
function showPopupRedeem(){
  $(".layout-background").css("display","block");
  $(".popup-coin-redeeme").css("display","grid");
}
function logoutAccount(){
  $(".layout-background").css("display","block");
  $(".popup-logout").css("display","block");
}
function showPopupBlock(){
  $(".layout-background").css("display","block");
  $(".popup-block").css("display","block");
}
function showOrderItem(){
  $(".layout-background").css("display","block");
  $(".popup-order-item").css("display","block");
}
function showPopupDelete(){
  $(".layout-background").css("display","block");
  $(".popup-delete").css("display","block");
}
function hidePopup(){
  $(".layout-background").css("display","none");
  $(".popup-history-reward").css("display","none");
  $(".popup-coin-redeeme").css("display","none");
  $(".popup-order-item").css("display","none");
  $(".popup-logout").css("display","none");
  $(".popup-delete").css("display","none");
}

// cart popup
function hidePopupCart(){
  $(".layout-background-cart").css("display","none");
  $(".product-cart-popup").css("display","none");
  $(".topping-cart").css("display","none");
}
function showPopupCart(){
  $(".layout-background-cart").css("display","block");
  $(".product-cart-popup").css("display","flex");
  $(".topping-cart").css("display","block");
}
//
function editProduct(){
  window.location.href = "./resources/html/admin-edit-product.html";
}
// function goSignup(){

//     // var display =  $('.container').css("display","none");
// // var x= $('.signup');
//     // alert(String($("#signin-form")));
//     // $(".signin").css("z-index","-1");
//     $(".container").css("background-color","#fff");
// };