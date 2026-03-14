document.getElementById("toggle").addEventListener("click", function()
{
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});


<script>
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
  if (sidebar.style.left === '0px') {
    sidebar.style.left = '-250px';
    document.body.classList.remove('sidebar-open');
  } else {
    sidebar.style.left = '0px';
    document.body.classList.add('sidebar-open');
  }
});

// Optional: close sidebar if clicked outside
document.body.addEventListener('click', function(e){
  if(!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.style.left = '-250px';
    document.body.classList.remove('sidebar-open');
  }
});
</script>
