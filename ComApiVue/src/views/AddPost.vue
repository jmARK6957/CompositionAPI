<script setup>
</script>

<template>
    <div class="wrapper">
        <form>
            <h3>Add a New Post</h3>
            <div>
                <label>Post Title</label>
                <input type="text"/>
            </div>
            <div>
                <label>Post Content</label>
                <textarea rows="5"></textarea>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  background-color: #f5f7fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  form {
    background: #ffffff;
    padding: 2rem 2.5rem;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;

    h3 {
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      color: #333;
    }

    div {
      margin-bottom: 1.2rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: #555;
      }

      input,
      textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
        background-color: #fafafa;
        transition: border-color 0.3s;

        &:focus {
          border-color: #007bff;
          outline: none;
          background-color: #fff;
        }
      }

      button {
        padding: 0.75rem 1.5rem;
        background-color: #007bff;
        color: #fff;
        font-size: 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #0056b3;
        }
      }
    }
  }
}
</style>  