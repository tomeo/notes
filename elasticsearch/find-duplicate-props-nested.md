# Find duplicate props in nested property

`POST` the following query to `/{index}/_search`:
```
{
	"size": 0,
	"aggs": {
		"prop_counts": {
			"nested": {
				"path": "nested_path"
			},
			"aggs": {
				"inner_prop_counts": {
					"terms": {
						"field": "nested_path.property_name",
						"min_doc_count": 2,
                        "size": 100
					},
					"aggs": {
						"doc_id": {
							"terms": {
								"field": "_id",
								"min_doc_count": 2,
                                "size": 100
							}
						}
					}
				}
			}
		}
	}
}
```