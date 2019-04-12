<template>
  <div class="carousel-inner">
  <div class="item active"><img src="img/2.jpg" alt="" />
  </div>
  <div class="item"><img src="img/5.jpg" alt="" />
  </div>
      <div class="item"><img src="img/7.jpg" alt="" />
  </div>
    <AddItem></AddItem>
</div>
</template>

<script>
// @ is an alias to /src
import AddItem from "./AddItem"

export default {
  name: 'home',
  components: {
    AddItem
  }
}
</script>
