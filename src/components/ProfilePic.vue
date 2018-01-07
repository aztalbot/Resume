<template>
    <img src="../assets/profile.jpeg">
</template>

<script>
export default {
  name: 'ProfilePic'
}
</script>

<style>
img {
  border-radius: 100%;
  box-shadow: 0px 1px 4px 1px grey;
  transition: box-shadow .3s ease-in-out, transform .3s ease-in-out;
  position: relative;
  transform: scale(0.6)
}

img:hover {
  border-radius: 100%;
  box-shadow: 0px 1.5px 5.5px 1.5px grey;
  transform: scale(0.62)
}
</style>
