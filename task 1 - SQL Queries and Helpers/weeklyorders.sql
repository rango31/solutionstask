CREATE VIEW weekly_orders AS
SELECT
    o.id AS order_id,
    o.products AS order_products,
    u.id AS user_id,
    u.first_name AS client_firstname,
	u.last_name AS client_lastname,
    pay.type AS payment_type,
	pay.details AS payment_details,
    os.title AS order_status,
    o.created_at AS order_date
FROM orders o
LEFT OUTER JOIN payments pay ON o.payment_id = pay.id
LEFT OUTER JOIN order_statuses os ON o.order_status_id = os.id
LEFT OUTER JOIN users u ON o.user_id = u.id
WHERE YEARWEEK(o.created_at) = YEARWEEK(CURDATE());

--- NB : WEEK STARTS ON SUNDAY
--- this view will not be “updated daily” by itself. 
--- The data in the view is generated dynamically whenever you query the view. 
--- So, if the underlying data changes, the next time you query the view, it will reflect those changes.