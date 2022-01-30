<div class="bg-base-100 dark:bg-base-50 text-base-900 rounded-md shadow-lg">
	<div class="bg-base-200 dark:bg-base-100 rounded-t-lg p-2 pl-3">
		<slot name="header" />
	</div>
	<div class="p-6 pl-3"><slot /></div>
	<div class="bg-base-200 dark:bg-base-100 rounded-b-lg p-2 pl-3">
		<slot name="footer" />
	</div>
</div>
