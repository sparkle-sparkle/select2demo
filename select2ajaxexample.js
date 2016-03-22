$(document).ready(function () {
	
	initView();
	
	function initView() {
		addSelect2();
		bindUpdateListener();
	}
	
	function addSelect2() {
		$.fn.select2.defaults.set( "theme", "bootstrap" );
		
		$('#select2-dropdown').select2({
			ajax : {
				url: 'https://opendata.rijksoverheid.nl/v1/sources/rijksoverheid/infotypes/news?output=json',
				dataType: 'json',
				contentType: 'json',
				processResults: function(data) {
					return {
						results: data
					}
				}
			},
			placeholder: 'Selecteer een optie...',
			allowClear: true,
			language: "nl",
			width: null,
			templateResult: formatResult, // tell Select2 how results should be displayed in the dropdown
			templateSelection: formatSelection // tell Select2 how selected results should be displayed in dropdown
		});
	}
	
	function formatResult (result) {
		return result.title;
    	}
    	
    	function formatSelection (result) {
    		return result.title;
    	}
	
	function bindUpdateListener() {
		$('#select2-dropdown').on("select2:select", function (e) {
			JSON.stringify(e.params, function(key, value) {
				$('#article').html(value['data'].introduction);
			})
		});
	}
	
});