-- -----------------------------------------
-- ECHIPAJE (CREWS)
-- ID-urile vor fi generate automat (1, 2, 3, 4)
-- -----------------------------------------

INSERT INTO Crews (name, Bounty, Ship, Captain)
VALUES ('Straw Hat Pirates', 8816000000, 'Thousand Sunny', 'Monkey D. Luffy');

INSERT INTO Crews (name, Bounty, Ship, Captain)
VALUES ('Heart Pirates', 3000500000, 'Polar Tang', 'Trafalgar D. Water Law');

INSERT INTO Crews (name, Bounty, Ship, Captain)
VALUES ('Red Hair Pirates', 4142900000, 'Red Force', 'Shanks');

INSERT INTO Crews (name, Bounty, Ship, Captain)
VALUES ('Blackbeard Pirates', 4194200000, 'Saber of Xebec', 'Marshall D. Teach');


-- -----------------------------------------
-- PERSONAJE (CHARACTERS)
-- -----------------------------------------

-- Membri pentru Straw Hat Pirates (crew_id = 1)
INSERT INTO Characters (name, bounty, devilfruit, role, crew_id)
VALUES ('Monkey D. Luffy', 3000000000, 'Hito Hito no Mi, Model: Nika', 'Captain', 1);

INSERT INTO Characters (name, bounty, devilfruit, role, crew_id)
VALUES ('Roronoa Zoro', 1101000000, 'None', 'Swordsman', 1);

INSERT INTO Characters (name, bounty, devilfruit, role, crew_id)
VALUES ('Nami', 366000000, 'None', 'Navigator', 1);

INSERT INTO Characters (name, bounty, devilfruit, role, crew_id)
VALUES ('Vinsmoke Sanji', 1032000000, 'None', 'Cook', 1);

INSERT INTO Characters (name, bounty, devilfruit, role, crew_id)
VALUES ('Nico Robin', 930000000, 'Hana Hana no Mi', 'Archaeologist', 1);

INSERT INTO Characters (name, bounty, devilfruit, role, crew_id)
VALUES ('Tony Tony Chopper', 1000, 'Hito Hito no Mi', 'Doctor', 1);


-- Membri pentru Heart Pirates (crew_id = 2)
INSERT INTO Characters (name, bounty, devilfruit, role, crew_id)
VALUES ('Trafalgar D. Water Law', 3000000000, 'Ope Ope no Mi', 'Captain / Doctor', 2);

INSERT INTO Characters (name, bounty, devilfruit, role, crew_id)
VALUES ('Bepo', 500, 'None', 'Navigator', 2);


-- Membri pentru Red Hair Pirates (crew_id = 3)
INSERT INTO Characters (name, bounty, devilfruit, role, crew_id)
VALUES ('Shanks', 4048900000, 'None', 'Captain', 3);

INSERT INTO Characters (name, bounty, devilfruit, role, crew_id)
VALUES ('Benn Beckman', 0, 'None', 'First Mate', 3); -- Nu îi știm bounty-ul oficial


-- Membri pentru Blackbeard Pirates (crew_id = 4)
INSERT INTO Characters (name, bounty, devilfruit, role, crew_id)
VALUES ('Marshall D. Teach', 3996000000, 'Yami Yami no Mi & Gura Gura no Mi', 'Captain', 4);