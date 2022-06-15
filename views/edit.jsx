const React = require("react");
const Default = require("./layouts/Default");

function Edit({ bread, id }) {
  return (
    <Default>
      <h2>Edit a bread</h2>
      <form action={`/breads/${id}?_method=PUT`} method="POST">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          defaultValue={bread.name}
        />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" defaultValue={bread.image} />
        <label htmlFor="baker">Baker</label>
        <select name="baker" id="baker" defaultValue={bread.baker}>
          <option value="Cloud">Cloud</option>
          <option value="Barret">Barret</option>
          <option value="Tifa">Tifa</option>
          <option value="Aerith">Aerith</option>
          <option value="Sephiroth">Sephiroth</option>
        </select>
        <label htmlFor="hasGluten">Has Gluten?</label>
        <input
          type="checkbox"
          name="hasGluten"
          id="hasGluten"
          defaultChecked
          defaultValue={bread.hasGluten}
        />
        <br />
        <input type="submit" />
      </form>
    </Default>
  );
}

module.exports = Edit;