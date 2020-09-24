import ShareCfgModel from "../model.sharecfg.base";

export default class Skill extends ShareCfgModel {
    id: number;
    name: string;
    type: number;
    description: string;
    descriptionValues: string[];

    constructor(id: number) {
        super([ "skills" ]);
        this.id = id;
    }

    async load(skills: any[]): Promise<void> {
        const skill = skills.find(s => s.id == this.id);

        if (!skill)
            throw new Error("Skill not found.");

        this.name = skill.name.trim();
        this.type = skill.type;
        this.description = skill.desc;
        this.descriptionValues = (skill.desc_add[0])
            ? skill.desc_add[0].map(e => e[0])
            : [];
    }
}