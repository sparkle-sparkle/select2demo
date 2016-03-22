$(document).ready(function () {
	
	initView();
	
	function initView() {
		addSelect2();
		bindUpdateColorsListener();
	}
	
	function addSelect2() {
		$.fn.select2.defaults.set( "theme", "bootstrap" );
		
		$('#select2-dropdown').select2({
			placeholder: 'Selecteer een kleur...',
			allowClear: true,
			language: "nl",
			width: null
		});
	}
	
	function bindUpdateColorsListener() {
		$('#update-colors').on('click', function() {
			$('#select2-dropdown').append('<option value="purple">purple</option>');
			$('#select2-dropdown').append('<option value="brown">brown</option>');
			$('#select2-dropdown').select2('destroy');
			addSelect2();
		});
	}
	
});