import { Injectable } from '@angular/core';
import * as lf from 'lovefield';
@Injectable()
export class NotesService {
    private schemaBuilder: any;
    constructor() {
        this.setupNotesSchema();
    }

    private setupNotesSchema() {
        this.schemaBuilder = lf.schema.create('tangent', 1);

        this.schemaBuilder.createTable('notes').
            addColumn('id', lf.Type.INTEGER).
            addColumn('topic').
            addColumn('description', lf.Type.STRING).
            addColumn('creationdate', lf.Type.DATE_TIME).
            addColumn('type', lf.Type.STRING).
            addPrimaryKey(['id'], true).
            addIndex('idxCreationdate', ['creationdate'], false, lf.Order.DESC);
    }

    public getAllNotes() {
        let self = this;
        let notes: any;
        let notesDb: any;
        return new Promise((resolve, reject) => {
            self.schemaBuilder.connect().then((db: any) => {
                notes = db.getSchema().table('notes');
                notesDb = db;

                return db.select().from(notes).exec();
            }).then((results: any) => {
                resolve(results);
                notesDb.close();
            });
        });
    }

    public insertNote(topic: string, description: string, type: string) {
        let self = this;
        let notesDb: any;
        let notes: any;
        return new Promise((resolve, reject) => {
            self.schemaBuilder.connect().then((db: any) => {
                notesDb = db;
                notes = db.getSchema().table('notes');
                var row = notes.createRow({
                    'topic': topic,
                    'description': description,
                    'type': type,
                    'creationdate': new Date()
                });

                    return db.insertOrReplace().into(notes).values([row]).exec();
                }).then(() => {
                    return notesDb.select().from(notes).exec();
                }).then((results: any) => {
                    resolve(results);
                    notesDb.close();
                });
        });
    }
}