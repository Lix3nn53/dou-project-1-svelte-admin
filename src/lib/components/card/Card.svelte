<div class="dark:bg-base-700 bg-base-300 rounded-lg shadow-lg">
	<div class="dark:bg-base-600 bg-base-400 rounded-t-lg p-2 pl-3">
		<slot name="header" />
	</div>
	<div class="p-6 pl-3"><slot /></div>
	<div class="dark:bg-base-600 bg-base-400 rounded-b-lg p-2 pl-3">
		<slot name="footer" />
	</div>
</div>
