
/www/server/pyporject_evn/versions/3.9.10/bin/python3.9 -m pip install poetry
/www/server/pyporject_evn/versions/3.9.10/bin/python3.9 -m pip install pycryptodome

RUN python3 -m pip install poetry
RUN python3 -m pip install pycryptodome
RUN poetry config virtualenvs.create false
RUN poetry install