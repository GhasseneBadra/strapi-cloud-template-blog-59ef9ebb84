import type { Schema, Struct } from '@strapi/strapi';

export interface PracticeAreaService extends Struct.ComponentSchema {
  collectionName: 'components_practice_area_services';
  info: {
    description: 'Individual service within a practice area';
    displayName: 'Service';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface TeamContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_team_contact_infos';
  info: {
    displayName: 'Contact Info';
    icon: 'manyToMany';
  };
  attributes: {
    address: Schema.Attribute.Blocks;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
  };
}

export interface TeamProfessionalExperience extends Struct.ComponentSchema {
  collectionName: 'components_team_professional_experiences';
  info: {
    displayName: 'Professional Experience';
    icon: 'briefcase';
  };
  attributes: {
    certification: Schema.Attribute.JSON;
    education: Schema.Attribute.JSON;
    experience: Schema.Attribute.String;
    personalExperience: Schema.Attribute.Text;
  };
}

export interface TeamSkillAchievements extends Struct.ComponentSchema {
  collectionName: 'components_team_skill_achievements';
  info: {
    displayName: 'Skill achievements';
    icon: 'lightbulb';
  };
  attributes: {
    achievements: Schema.Attribute.JSON;
    skill: Schema.Attribute.JSON;
  };
}

export interface TeamSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_team_social_medias';
  info: {
    displayName: 'Social Media';
    icon: 'cursor';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'practice-area.service': PracticeAreaService;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'team.contact-info': TeamContactInfo;
      'team.professional-experience': TeamProfessionalExperience;
      'team.skill-achievements': TeamSkillAchievements;
      'team.social-media': TeamSocialMedia;
    }
  }
}
