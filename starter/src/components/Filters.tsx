import "./ComponentsStyle/filtercomponent.css";
const FilterComponent = () => {
  return (
    <div className="filter-container ">
      <h2>Филтри</h2>
      <div className="filter-section">
        <h3>Попуст</h3>
        <label>
          <input type="radio" value="option1" />
          20% или повеќе
        </label>
        <label>
          <input type="radio" value="option2" />
          10% или повеќе
        </label>
        <label>
          <input type="radio" value="option3" />
          5% или повеќе
        </label>
      </div>
      <div className="filter-section">
        <h3>Цена</h3>
        <input type="range" min={0} max={100} />
      </div>
      <div className="filter-section">
        <h3>Категорија</h3>
        <input type="text" placeholder="Најди категорија" />
        <label>
          <input type="radio" value="option1" />
          Обувки
        </label>
        <label>
          <input type="radio" value="option2" />
          Бела техника
        </label>
        <label>
          <input type="radio" value="option3" />
          Облека
        </label>
        <label>
          <input type="radio" value="option1" />
          За деца
        </label>
        <label>
          <input type="radio" value="option2" />
          Фотографија
        </label>
        <label>
          <input type="radio" value="option3" />
          Спорт
        </label>
      </div>
      <div className="filter-section">
        <h3>Бренд</h3>
        <input type="text" placeholder="Најди бренд" />
        <label>
          <input type="radio" value="option1" />
          Apple
        </label>
        <label>
          <input type="radio" value="option2" />
          Sony
        </label>
        <label>
          <input type="radio" value="option3" />
          Samsung
        </label>
        <label>
          <input type="checkbox" value="option1" />
          Microsoft
        </label>
        <label>
          <input type="radio" value="option2" />
          Adidas
        </label>
        <label>
          <input type="radio" value="option3" />
          Nike
        </label>
      </div>
    </div>
  );
};

export default FilterComponent;
