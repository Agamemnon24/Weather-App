const Units = ({ handleUnitsChange, units }) => {
    return (
      <div className="units">
        <label htmlFor="input">Unit Of Measurement</label>
        <select
          name="input"
          id="Input"
          value={units}
          onChange={handleUnitsChange}
        >
          <option value="metric" onChange={handleUnitsChange}>
            Metric
          </option>
          <option value="imperial" onChange={handleUnitsChange}>
            Imperial
          </option>
        </select>
      </div>
    );
  };
  
  export default Units;
  