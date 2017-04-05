
$(document).ready(function() {
		var title = document.title;
		var tit = title.split("|");
		var tit1 = tit[0].split(",");
		var tit2 = tit1[0].split("-");
		var tit3 = tit2[0].split(".");
		var tit4 = tit3[0].split(/calculator/gi);
		var netitle = tit4[0]+" Calculator";
                netitle = netitle.replace(/[`~!@#$^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ""); 
                netitle = netitle.replace(/calculation/ig, "");
                netitle = netitle.replace(/converter/ig, "");
//		var netitle = tit3[0]; 
		var neurl = document.URL;
                if(location.hostname == "es.easycalculation.com" || location.hostname == "www.es.easycalculation.com")
                {
                    var lan = "es";
                }
                else
                {
                    var lan = "en";
                }

		var ajurl = "http://"+location.hostname+"/view-search.php"; //alert(lan+"--"+ajurl);
		var datas = "url="+neurl+"&title="+netitle+"&langs="+lan;
		$.ajax({               
			type:"POST",
			url:ajurl,
			data:datas,
			success:function(html){
				//alert(html);
				}
		});

		$("textarea.auto_selectemb").mouseover(function(){
			 $(this).select();
		});

		$("#embedisp").hide();

});
