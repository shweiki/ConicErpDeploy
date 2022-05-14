
SELECT * FROM EntryAccounting
UPDATE EA
SET 
EA.FakeDate=(SELECT StartDate FROM MembershipMovement where Id = EM.Fktable )
FROM (SELECT * FROM EntryAccounting where  FakeDate = '0001-01-01 00:00:00.0000000' or FakeDate = '2001-01-01 00:23:00.0000000' )  EA
INNER JOIN
(SELECT * FROM EntryMovement where  TableName = 'MembershipMovement') AS EM
ON EA.Id = EM.EntryId

