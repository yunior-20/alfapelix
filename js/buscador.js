var consulta = $("#searchTable").DataTable();

$("#inputBusqueda").keyup(function(){
	consulta.search($(this).val()).draw();

	$("header").css({
		"height": "",
		"background": ""
	})

	if ($("#inputBusqueda").val() == ""){
		$("header").css({
			"height": "",
			"background": ""
		})

		$("#search").hide()

	} else {
		$("#search").fadeIn("fast");
	}
})