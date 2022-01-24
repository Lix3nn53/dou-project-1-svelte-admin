<script lang="ts">
	export let faClass: string;
	export let text: string;
  export let to: string;
</script>


<a href={to} class="relative flex items-center justify-center 
h-12 w-12 mt-2 mb-2 mx-auto  
bg-primary-200 hover:bg-green-600 dark:bg-primary-800 
text-green-500 hover:text-white
hover:rounded-xl rounded-3xl
transition-all duration-300 ease-linear
cursor-pointer shadow-lg group">
  <i class={faClass} />
  <span class="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
  text-white bg-primary-900 
  text-xs font-bold 
  transition-all duration-100 scale-0 origin-left group-hover:scale-100">
    {text}
  </span>
</a>

<style>
	a {
    text-decoration: none;
  }
</style>