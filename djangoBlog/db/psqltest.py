#!/usr/bin/python3
# -*- coding: utf-8 -*-

import pymysql

con = pymysql.Connect('localhost', 'root', 'codeup', 'spring_blog')

with con: 
  cur = con.cursor()
  cur.execute("SELECT * FROM posts")
    
  rows = cur.fetchall()

  for row in rows:
    print("{0} {1} {2}".format(row[0], row[1], row[2]))