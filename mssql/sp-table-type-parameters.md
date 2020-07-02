# Stored procedure with table type parameter

## Create table type
```
CREATE TYPE typeName AS TABLE (
    ColumnName1 nvarchar(36),
    ColumnName2 nvarchar(36)
)
```

## Create stored procedure
```
CREATE PROCEDURE spName
(
    @items typeName readonly
)
AS
BEGIN
    SELECT * FROM @items
    ...
END
```

## Call stored procedure

```
DECLARE @data typeName
INSERT @data (ColumnName1, ColumnName2) VALUES (value1, value2)
EXEC spName @data
```

## Call stored procedure from C# (Dapper)
```
public async Task ExecuteSomething(IReadOnlyCollection<TypeName> items)
{
    await using var connection = new SqlConnection(_connectionString);
    await connection.OpenAsync();

    var res = await connection.QueryAsync(
        "spName",
        new Parameters(items),
        commandType: CommandType.StoredProcedure
    );
}

private class Parameters : SqlMapper.IDynamicParameters
{
    private readonly IEnumerable<TypeName> _items;

    public Parameters(
        IEnumerable<TypeName> items)
    {
        _items_ = items;
    }

    public void AddParameters(IDbCommand command, SqlMapper.Identity identity)
    {
        var itemTable = new DataTable();
        itemTable.Columns.Add("Column1", typeof(string));
        itemTable.Columns.Add("Column2", typeof(string));

        foreach (var item in _items)
        {
            itemTable.Rows.Add(item.Value1, item.Value2);
        }

        command.Parameters.Add(new SqlParameter("@items", SqlDbType.Structured) { Value = itemTable });
    }
}
```