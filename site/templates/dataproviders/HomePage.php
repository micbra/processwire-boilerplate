<?php
	class HomePage extends \nw\DataProviders\PageDataProvider {

		public function populate() {
			/* 
			*** We cant access processwires variables (aka. Fuel) here directly like in the Templates (e.g. 'pages.get').
			*** Instead we have to get them via the wire-function as seen below
			*/
			$pages = wire('pages');
			$count = $pages->get('/')->numChildren();

			// $this refers to the current page, so $this->page->something would add values to the page's page-object
			$this->dataProviderTest = 'You have ' . $count . ' more page(s) in your <a href="./processwire">admin area</a>';	
		}
	}