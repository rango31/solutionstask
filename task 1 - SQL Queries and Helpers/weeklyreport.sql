CREATE VIEW weekly_order_report AS
SELECT
  -- Monday
  GROUP_CONCAT(
    CASE WHEN DAYOFWEEK(sub.created_at) = 1 THEN
      CONCAT(sub.uuid, '::', sub.product_count, '::', CAST(sub.amount * 100 AS SIGNED))
    END SEPARATOR ' || '
  ) AS "Monday" ,

  -- Tuesday
  GROUP_CONCAT(
    CASE WHEN DAYOFWEEK(sub.created_at) = 2 THEN
      CONCAT(sub.uuid, '::', sub.product_count, '::', CAST(sub.amount * 100 AS SIGNED))
    END SEPARATOR ' || '
  ) AS "Tuesday",

  -- Wednesday
  GROUP_CONCAT(
    CASE WHEN DAYOFWEEK(sub.created_at) = 3 THEN
      CONCAT(sub.uuid, '::', sub.product_count, '::', CAST(sub.amount * 100 AS SIGNED))
    END SEPARATOR ' || '
  ) AS "Wednesday",

  -- Thursday
  GROUP_CONCAT(
    CASE WHEN DAYOFWEEK(sub.created_at) = 4 THEN
      CONCAT(sub.uuid, '::', sub.product_count, '::', CAST(sub.amount * 100 AS SIGNED))
    END SEPARATOR ' || '
  ) AS "Thursday",

  -- Friday
  GROUP_CONCAT(
    CASE WHEN DAYOFWEEK(sub.created_at) = 5 THEN
      CONCAT(sub.uuid, '::', sub.product_count, '::', CAST(sub.amount * 100 AS SIGNED))
    END SEPARATOR ' || '
  ) AS "Friday",

  -- Saturday
  GROUP_CONCAT(
    CASE WHEN DAYOFWEEK(sub.created_at) = 6 THEN
      CONCAT(sub.uuid, '::', sub.product_count, '::', CAST(sub.amount * 100 AS SIGNED))
    END SEPARATOR ' || '
  ) AS "Saturday",

  -- Sunday
  GROUP_CONCAT(
    CASE WHEN DAYOFWEEK(sub.created_at) = 0 THEN
      CONCAT(sub.uuid, '::', sub.product_count, '::', CAST(sub.amount * 100 AS SIGNED))
    END SEPARATOR ' || '
  ) AS "Sunday"
FROM (
  SELECT
    o.uuid,
    o.created_at,
    JSON_LENGTH(o.products) AS product_count,
    o.amount
  FROM orders o
) AS sub;
