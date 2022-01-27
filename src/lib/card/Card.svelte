<div class="dark:bg-primary-700 bg-primary-300 rounded-lg shadow-lg">
	<div class="dark:bg-primary-600 bg-primary-400 rounded-t-lg p-2 pl-3">
		<slot name="header" />
	</div>
	<div class="p-6 pl-3"><slot /></div>
	<div class="dark:bg-primary-600 bg-primary-400 rounded-b-lg p-2 pl-3">
		<slot name="footer" />
	</div>
</div>
