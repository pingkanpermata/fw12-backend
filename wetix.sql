CREATE DATABASE wetix;

CREATE TABLE "users" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"       VARCHAR(255),
    "firstName"     VARCHAR(255),
    "lastName"      VARCHAR(255),
    "phoneNumber"   VARCHAR(255),
    "email"         VARCHAR(255),
    "password"      VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updateAt"      TIMESTAMPTZ
);

CREATE TABLE "reset_password" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "email"         VARCHAR(255),
    "userId"        INT,
    "code"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updateAt"      TIMESTAMPTZ
);

CREATE TABLE "movies" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "title"         VARCHAR(255),
    "picture"       VARCHAR(255),
    "releaseDate"   TIMESTAMPTZ,
    "directedBy"    VARCHAR(255),
    "duration"      TIME,
    "synopsis"      TEXT,
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

CREATE TABLE "genre" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

CREATE TABLE "movie_genre" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "movieId"       INT,
    "genreId"       INT,
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

CREATE TABLE "casts" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

CREATE TABLE "movie_casts" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "movieId"       INT,
    "castsId"       INT,
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

CREATE TABLE "cinema" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"       VARCHAR(255),
    "name"          VARCHAR(255),
    "address"       VARCHAR(255),
    "city"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

CREATE TABLE "movie_schedule" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "movieId"       INT,
    "cinemaId"      INT,
    "price"         BIGINT,
    "startDate"     DATE,
    "endDate"       DATE,
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

CREATE TABLE "movie_schedule_time" (
    "id"                    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "time"                  TIME,
    "movie_scheduleId"      INT,
    "createdAt"             TIMESTAMPTZ DEFAULT now(),
    "updatedAt"             TIMESTAMPTZ
);

CREATE TABLE "status" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

CREATE TABLE "transaction" (
    "id"                    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "bookingDate"           TIMESTAMPTZ,
    "movieId"               INT,
    "cinemaId"              INT,
    "movie_scheduleId"      INT,
    "fullName"              VARCHAR(255),
    "email"                 VARCHAR(255),
    "phoneNumber"           VARCHAR(255),
    "statusId"              INT,
    "createdAt"             TIMESTAMPTZ DEFAULT now(),
    "updatedAt"             TIMESTAMPTZ
);

CREATE TABLE "reserved" (
    "id"                INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "seatNumber"        VARCHAR(255),
    "transactionId"     INT,
    "createdAt"         TIMESTAMPTZ DEFAULT now(),
    "updatedAt"         TIMESTAMPTZ
);

CREATE TABLE "payment_method" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"       VARCHAR(255),
    "name"          VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

CREATE TABLE "subscribers" (
    "id"            INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "email"         VARCHAR(255),
    "createdAt"     TIMESTAMPTZ DEFAULT now(),
    "updatedAt"     TIMESTAMPTZ
);

-------INSERT DATA-------

INSERT INTO "users" ("picture","firstName","lastName","phoneNumber","email","password")
VALUES ('','Erika','Rose','50656009','erikarose@teleworm.us','erika007');

INSERT INTO "reset_password" ("email","userId","code")
VALUES ('erikarose@teleworm.us',1,'rose123');

INSERT INTO "movies" ("title","picture","releaseDate","directedBy","duration","synopsis")
VALUES ('Tenet','','3 September 2020','Christoper Nolan','2:30:00',
'Armed with only one word, Tenet, and fighting for the survival of the entire world, 
a Protagonist journeys through a twilight world of international espionage on a mission 
that will unfold in something beyond real time.');

INSERT INTO "genre" ("name")
VALUES ('Action, Sci-fi, Thriller');

INSERT INTO "movie_genre" ("movieId","genreId")
VALUES (1,1);

INSERT INTO "casts" ("name")
VALUES ('John David Washington, Elizabeth Debicki, Andrew Howard');

INSERT INTO "movie_casts" ("movieId","castsId")
VALUES (1,1);

INSERT INTO "cinema" ("picture","name","address","city")
VALUES ('','hiflix','Metropolis Town Square Modernland','Tangerang');

INSERT INTO "movie_schedule" ("movieId","cinemaId","price","startDate","endDate")
VALUES (1,1,25000,'11-22-2022','11-24-2022');

INSERT INTO "movie_schedule_time" ("time","movie_scheduleId")
VALUES ('2:30:00',1);

INSERT INTO "status" ("name")
VALUES ('Active');

INSERT INTO "transaction" ("bookingDate","movieId","cinemaId","movie_scheduleId",
"fullName","email","phoneNumber","statusId")
VALUES ('11-23-2022 10:00:53',1,1,1,'Erika Rose','erikarose@teleworm.us','50656009','1');

INSERT INTO "reserved" ("seatNumber","transactionId")
VALUES ('C7,C8','1');

INSERT INTO "payment_method" ("picture","name")
VALUES ('','paypal');

INSERT INTO "subscribers" ("email")
VALUES ('erikarose@teleworm.us');