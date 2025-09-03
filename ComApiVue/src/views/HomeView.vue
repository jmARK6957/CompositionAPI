<script setup>
</script>

<template>
  <main>
    <div class="wrapper">
      <div class="header">
        <span>Written by [Your name] on [date]</span>
        <div>
          <button class="del material-icons">delete</button>
          <button class="save material-icons">save</button>
        </div>
      </div>
      <h1>Title</h1>
      <p>Content goes here...</p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 700px;
  margin: 40px auto;
  padding: 32px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    span {
      color: #888;
      font-size: 0.95rem;
    }

    button {
      background: #f5f5f5;
      border: none;
      border-radius: 6px;
      padding: 8px 16px;
      margin-left: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;

      &.del {
        color: #d32f2f;
      }
      &.save {
        color: #388e3c;
      }
      &:hover {
        background: #e0e0e0;
      }
    }
  }

  h1 {
    font-size: 2.2rem;
    margin-bottom: 16px;
    color: #222;
  }

  p {
    font-size: 1.15rem;
    color: #444;
    line-height: 1.7;
  }
}
</style>
