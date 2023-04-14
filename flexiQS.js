define( ["qlik", "jquery", "text!./style.css"], function ( qlik, $, cssContent ) {
	'use strict';
	
	$( "<style>" ).html( cssContent ).appendTo( "head" );	
	
	
	return {
		initialProperties: {
			qHyperCubeDef: {
				qDimensions: [],
				qMeasures: [],
				qInitialDataFetch: [{
					qWidth: 10,
					qHeight: 50
				}]
			}
		},
		definition: {
			type: "items",
			component: "accordion",
			items: {
				dimensions: {
					uses: "dimensions",
					min: 0,
					max: 3				
				},
				sorting: {
					uses: "sorting"
				},
				settings: {
					uses: "settings"
				},
				flexiQS: {
					component: "expandable-items",
					label: "FlexiQS Configuration",
					items:{
						sheetStyle:{
							type: "items",
							label: "Sheet Style",
							items:{
								sheet_title_enable:{
									type:"boolean",
									component:"switch",
									label:"Sheet Title",
									ref:"sheet_title_enable",
									options:[{
										value:true
									},{
										value:false
									}],
									defaultValue: true
								}
							}
						},
						document_navigation:{
							type: "items",
							label: "Navigation Bar",
							items:{
								document_navigation_enable: {
									type: "boolean",
									ref: "document_navigation_enable",
									label: "Enable",
									defaultValue: false
								},
								bar_color: {
									type: "object",
									ref: "bar_color",
									label: "Bar Color",
									component: "color-picker",
									defaultValue:{
										color: "#155599"
									},
									show: function(param){
										return param.document_navigation_enable;
									}
								},
								bar_top_config: {
									type: "string",
									label: "Bar Top %",
									ref: "bar_top_config",
									defaultValue: 0,
									show: function(param){
										return param.document_navigation_enable;
									}
								},
								bar_disclaimer:{
									label:"To use this function, you have to create a table containing three dimensions: 1) Order (you can use numerals or letters, this will be used to sort the items), 2) Sheet title and 3) Sheet ID. Add that three dimensions on the dimensions section to see the navigation bar. For more info and exemples, check:",
									component:"text"									
								},
								bar_disclaimer_link:{
									label:"FlexiQS GitHub Page",
									component:"link",
									url:"https://www.github.com/EduardoMetzger/FlexiQS"
								}
							}
						},
						interface:{
							type: "items",
							label: "Qlik Interface",
							items:{
								//PREPARAR E ANALISAR
								document_bar_enable:{
									type:"boolean",
									component: "switch",
									label:">>> DOCUMENT BAR",
									ref: "document_bar_enable",
									options:[{
										value:true
									}, {
										value:false
									}],
									defaultValue: true
								},
								document_bar_background:{
									type:"object",
									component:"color-picker",
									ref:"document_bar_background",
									label:"Background",
									defaultValue:{
										color:"#ffffff"
									},
									show: function(param){
										return param.document_bar_enable
									}
								},
								document_bar_text_color:{
									type:"object",
									component:"color-picker",
									ref:"document_bar_text_color",
									label:"Text Color",
									defaultValue:{
										color:"#404040"
									},
									show: function(param){
										return param.document_bar_enable
									}
								},
								document_bar_border_color:{
									type:"object",
									component:"color-picker",
									ref:"document_bar_border_color",
									label:"Border Color",
									defaultValue:{
										color:"#E6E6E6"
									},
									show: function(param){
										return param.document_bar_enable
									}
								},
								selections_bar_text:{
									label:"    >>> SELECTIONS BAR",
									component:"text"									
								},
								selections_bar_background:{
									type:"object",
									component:"color-picker",
									ref:"selections_bar_background",
									label:"Background",
									defaultValue:{
										color:"#ffffff"
									}
								},
								selections_bar_text_color:{
									type:"object",
									component:"color-picker",
									ref:"selections_bar_text_color",
									label:"Text Color",
									defaultValue:{
										color:"#404040"
									}
								},
								selections_bar_selections_background:{
									type:"object",
									component:"color-picker",
									ref:"selections_bar_selections_background",
									label:"Selections Background",
									defaultValue:{
										color:"#00873d"
									}
								},
								selections_bar_selections_text:{
									type:"object",
									component:"color-picker",
									ref:"selections_bar_selections_text",
									label:"Selections Text",
									defaultValue:{
										color:"#ffffff"
									}
								},
								//ICONES BARRA SELEÇÕES
								selections_bar_icons_text:{
									label:"    >>> SELECTIONS BAR ICONS",
									component:"text"
								},
								selections_bar_notes:{
									type:"boolean",
									component: "switch",
									label:"Notes",
									ref: "selections_bar_notes",
									options:[{
										value:true
									}, {
										value:false
									}],
									defaultValue: true
								},
								selections_bar_smartsearch:{
									type:"boolean",
									component: "switch",
									label:"Smart Search",
									ref: "selections_bar_smartsearch",
									options:[{
										value:true
									}, {
										value:false
									}],
									defaultValue: true
								},
								selections_bar_undo_selection:{
									type:"boolean",
									component: "switch",
									label:"Undo Selection",
									ref: "selections_bar_undo_selection",
									options:[{
										value:true
									}, {
										value:false
									}],
									defaultValue: true
								},
								selections_bar_redo_selection:{
									type:"boolean",
									component: "switch",
									label:"Redo Selection",
									ref: "selections_bar_redo_selection",
									options:[{
										value:true
									}, {
										value:false
									}],
									defaultValue: true
								},
								selections_bar_clear_selection:{
									type:"boolean",
									component: "switch",
									label:"Clear Selections",
									ref: "selections_bar_clear_selection",
									options:[{
										value:true
									}, {
										value:false
									}],
									defaultValue: true
								},
								selections_bar_selectiontools:{
									type:"boolean",
									component: "switch",
									label:"Selection Tools",
									ref: "selections_bar_selectiontools",
									options:[{
										value:true
									}, {
										value:false
									}],
									defaultValue: true
								},
								selections_bar_bookmarks:{
									type:"boolean",
									component: "switch",
									label:"Bookmarks",
									ref: "selections_bar_bookmarks",
									options:[{
										value:true
									}, {
										value:false
									}],
									defaultValue: true
								},
								selections_bar_worksheets:{
									type:"boolean",
									component: "switch",
									label:"Worksheets",
									ref: "selections_bar_worksheets",
									options:[{
										value:true
									}, {
										value:false
									}],
									defaultValue: true
								},
								selections_bar_previousworksheet:{
									type:"boolean",
									component: "switch",
									label:"Prev Worksheet",
									ref: "selections_bar_previousworksheet",
									options:[{
										value:true
									}, {
										value:false
									}],
									defaultValue: true
								},
								selections_bar_nextworksheet:{
									type:"boolean",
									component: "switch",
									label:"Next Worksheet",
									ref: "selections_bar_nextworksheet",
									options:[{
										value:true
									}, {
										value:false
									}],
									defaultValue: true
								}
							}
						}
					}
				}
			}
		},		
		
		paint: function ( $element, layout ) {

			var bar_top = layout.bar_top_config+'%',
				bar_color = layout.bar_color.color,
				hc = layout.qHyperCube,
				tipo_menu = 'menu_compacto_Horizontal',
				novo_html = '';
			
			//sheet style
			if(layout.sheet_title_enable){
				$( ".sheet-title-container" ).removeClass("_hide");
			} else {
				$( ".sheet-title-container" ).addClass("_hide");
			}

			//navigation bar
			if(layout.document_navigation_enable) {
				novo_html +="<nav id='"+ tipo_menu +"' class='main-menu' style=top:" + bar_top + ";background-color:" + bar_color + ";>";
				novo_html +="<ul>";
				var current_url = window.location.href;
				var current_sheet = current_url.substr(current_url.search("sheet")+6,current_url.search("state")-1-current_url.search("sheet")-6);
				for (var c = 0; c < hc.qDataPages[0].qMatrix.length; c++) {
					if (current_sheet === hc.qDataPages[0].qMatrix[c][2].qText) {
						var ind_selecao = "selecionado"
					}else{
						var ind_selecao = ""
					}
					novo_html +="<li>";
					novo_html +="<a href='"+ hc.qDataPages[0].qMatrix[c][2].qText +"'>";
					novo_html +="<span class='nav-text' id='nav-text-item-" + ind_selecao + "'>";
					novo_html += hc.qDataPages[0].qMatrix[c][1].qText;
					novo_html +="</span>";
					novo_html +="</a>";
					novo_html +="</li>";
				}	
					novo_html +="</ul>";
					novo_html +="</nav>";					
					$( "#menu_compacto_Horizontal" ).remove();
					$( "#grid-wrap" ).prepend(novo_html); 			
					//direcionar o clique para pastas dentro do aplicativo
					$("#menu_compacto_Horizontal a").click(function(e){
						e.preventDefault();
						qlik.navigation.gotoSheet($(this).attr('href'));
					})
			} else {
				$( "#menu_compacto_Horizontal" ).css("display","none");
			}
			
			//document bar
			if(layout.document_bar_enable){
				var ind = $(".qs-toolbar").css("display");
				if(ind == 'none'){
					var document_bar_height = $(".qs-toolbar").css("height").replace('px','');
					var page_container_height = $('#qs-page-container').css("height").replace('px','');
					var page_container_height_calculated = Number(page_container_height) - Number(document_bar_height)
					$( ".qs-toolbar" ).removeClass("_hide");
					$( "#qs-page-container" ).css("height",page_container_height_calculated);
				}
			} else {
				var ind = $(".qs-toolbar").css("display");
				if(ind != 'none'){
					var document_bar_height = $(".qs-toolbar").css("height").replace('px','');
					var page_container_height = $('#qs-page-container').css("height").replace('px','');
					var page_container_height_calculated = Number(page_container_height) + Number(document_bar_height)
					$( ".qs-toolbar" ).addClass("_hide");
					$( "#qs-page-container" ).css("height",page_container_height_calculated);
				}
			}
			
			$( ".qs-toolbar" ).children().css("background-color",layout.document_bar_background.color);
			$( ".qs-toolbar" ).css("border-bottom","1px solid " + layout.document_bar_border_color.color);
			var i,
			tags = document.getElementById("qs-toolbar-container").getElementsByTagName("*"),
			total = tags.length;
			for ( i = 0; i < total; i++ ) {
				tags[i].style.color = layout.document_bar_text_color.color;
				var cor_borda = getComputedStyle(tags[i]).getPropertyValue("border-left-color")
					if(cor_borda != 'rgba(0, 0, 0, 0)'){
						tags[i].style.borderLeftColor = layout.document_bar_border_color.color;
					}
				var cor_borda = getComputedStyle(tags[i]).getPropertyValue("border-right-color")
					if(cor_borda != 'rgba(0, 0, 0, 0)'){
						tags[i].style.borderRightColor = layout.document_bar_border_color.color;
				}
			}

			//selections bar
				//edit mode
			$( ".css-10f4c7e" ).css("background-color",layout.selections_bar_background.color) //barra seleções/edição
			$( ".css-10f4c7e" ).css("color",layout.selections_bar_text_color.color) //barra seleções/edição
			$('.MuiButtonBase-root').css("color",layout.selections_bar_text_color.color) //botões fade-in (recortar, etc)
			$('.css-1wxaqej').css("color",layout.selections_bar_text_color.color) //bookmark
			var i,
			tags = document.querySelector("div.css-s36juo").getElementsByTagName("*"),
			total = tags.length;
			for ( i = 0; i < total; i++ ) {
				tags[i].style.color = layout.selections_bar_text_color.color;
			}
			$('.css-jq8gk8').css("color",layout.selections_bar_background.color) //edit button
				//analyse mode
			//$('.css-1gd8cdl').css("background-color",layout.selections_bar_background.color) //barra seleções
			//$('.current-selections-item').css("background-color",layout.selections_bar_selections_background.color)//item selecionado
			//$('[tid="selection-name"]').css("color",layout.selections_bar_selections_text.color)//item selecionado
			//$('[tid="current-selection-item-text"]').css("color",layout.selections_bar_selections_text.color)//item selecionado
			//$('[data-tid="current-selections-item"]').css("background-color", layout.selections_bar_selections_background.color)//item selecionado
			//$('.current-selections-item').css("color",layout.selections_bar_selections_text.color) //item selecionado
			//$('.css-1d3bbye').find(':first-child').css("background-color",layout.selections_bar_selections_background.color) //barra de % itens selecionados
			//$('.css-kujbap').css("color",layout.selections_bar_selections_text.color) //X item selecionado
			//$('.css-154srpe').css("color",layout.selections_bar_selections_text.color) //cadeado item selecionado
			$('.css-1lazv8h').css("background-color",layout.selections_bar_selections_background.color,) //edit button
			$('.css-1lazv8h').css("color",layout.selections_bar_selections_text.color) //edit button
			$('#note_svg__a').find(':first-child').attr("fill",layout.selections_bar_text_color.color) //note
			$('#note_svg__a').find(':nth-child(2)').attr("fill",layout.selections_bar_text_color.color) //note
			$('[data-testid="selection-overflow"]').css("background-color",layout.selections_bar_selections_background.color) //more selections
			$('.css-1h0zqjf').css("background-color",layout.selections_bar_selections_text.color) //more selections
			$('.css-1h0zqjf').css("color",layout.selections_bar_selections_background.color) //more selections

			//Alguns itens não geram atualização do document, portanto o js não altera a cor ao filtrar, por exemplo. Este HTML serve para corrigir esta situação.
			//Foi necessário manter a estrutura acima pois ao trocar a cor e sair do modo de edição, o HTML não é reinserido. Um cobre a falha do outro
			var style_html = ' .current-selections-item{background-color: ' + layout.selections_bar_selections_background.color + ' !important;} \n'
				style_html += ' [tid="selection-name"]{color: ' + layout.selections_bar_selections_text.color + ' !important;} \n'
				style_html += ' [tid="current-selection-item-text"]{color: ' + layout.selections_bar_selections_text.color + ' !important;} \n'
				style_html += ' .css-1d3bbye > .css-1wxaqej:first-child {background-color: ' + layout.selections_bar_selections_background.color + ' !important;} \n'
				style_html += ' .current-selections-item{color: ' + layout.selections_bar_selections_text.color + ' !important;} \n'
				style_html += ' .css-kujbap{color: ' + layout.selections_bar_selections_text.color + ' !important;} \n'
				style_html += ' .css-154srpe{color: ' + layout.selections_bar_selections_text.color + ' !important;} \n'
				style_html += ' [data-testid="selection-overflow"]background-color: ' + layout.selections_bar_selections_background.color + ' !important;} \n'
				style_html += ' .css-1gd8cdl{background-color: ' + layout.selections_bar_background.color + ' !important;} \n'
				style_html += ' .qvt-selections{background-color: ' + layout.selections_bar_background.color + ' !important;} \n'

			$('#flexiQS-Custom').remove();
			$('<style id="flexiQS-Custom"></style>').html(style_html).prependTo('head');

			if(layout.selections_bar_notes){
				$(".css-zzo9ay").removeClass("_hide");
			} else {
				$(".css-zzo9ay").addClass("_hide");
			}

			if(layout.selections_bar_smartsearch){
				$(".css-1qd1blq").removeClass("_hide");
			} else {
				$(".css-1qd1blq").addClass("_hide");
			}

			if(layout.selections_bar_undo_selection){
				$('[data-testid="current-selections-back"]').removeClass("_hide");
			} else {
				$('[data-testid="current-selections-back"]').addClass("_hide");
			}

			if(layout.selections_bar_redo_selection){
				$('[data-testid="current-selections-forward"]').removeClass("_hide");
			} else {
				$('[data-testid="current-selections-forward"]').addClass("_hide");
			}

			if(layout.selections_bar_clear_selection){
				$('[data-tid="current-selections-clear"]').removeClass("_hide");
			} else {
				$('[data-tid="current-selections-clear"]').addClass("_hide");
			}

			if(layout.selections_bar_selectiontools){
				$('[tid="currentSelections.toggleGlobalSelections"]').removeClass("_hide");
			} else {
				$('[tid="currentSelections.toggleGlobalSelections"]').addClass("_hide");
			}

			if(layout.selections_bar_bookmarks){
				$('[data-testid="toolbar-bookmarks-button"]').removeClass("_hide");
			} else {
				$('[data-testid="toolbar-bookmarks-button"]').addClass("_hide");
			}

			if(layout.selections_bar_worksheets){
				$('[data-testid="toolbar-sheets-button"]').removeClass("_hide");
			} else {
				$('[data-testid="toolbar-sheets-button"]').addClass("_hide");
			}

			if(layout.selections_bar_previousworksheet){
				$('[tid="btnQuickNavPrevious"]').removeClass("_hide");
			} else {
				$('[tid="btnQuickNavPrevious"]').addClass("_hide");
			}

			if(layout.selections_bar_nextworksheet){
				$('[tid="btnQuickNavNext"]').removeClass("_hide");
			} else {
				$('[tid="btnQuickNavNext"]').addClass("_hide");
			}


			return qlik.Promise.resolve();
			
		}
	};
} );
