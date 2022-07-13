'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([

{
    "type": "edubot_is_moving",
    "message0": "%{BKY_LABEL_IS_MOVING}",
    "output": "Boolean",
    "style": "move_blocks",
    "tooltip": "is moving?",
    "helpUrl": "https://github.com/oroca/OROCA-EduBot"
},
{
    "type": "edubot_set_max_velocity",
    "message0": "%{BKY_LABEL_SET_MAX_VELOCITY}",
    "args0": [
                {
                    "type": "input_value",
                    "name": "MAX_VEL",
                    "check": "Number"
                },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "move_blocks",
    "tooltip": "set maximum velocity",
    "helpUrl": "https://github.com/oroca/OROCA-EduBot"
},
{
    "type": "edubot_set_accel",
    "message0": "%{BKY_LABEL_SET_ACCELERATION}",
    "args0": [
                {
                    "type": "input_value",
                    "name": "ACCEL",
                    "check": "Number"
                },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "move_blocks",
    "tooltip": "set acceleration",
    "helpUrl": "https://github.com/oroca/OROCA-EduBot"
},
{
    "type": "edubot_motor_set_step",
    "message0": "%{BKY_LABEL_MOVE_SET_STEP}",
    "args0": [
                {
                    "type": "input_value",
                    "name": "L_STEP",
                    "check": "Number"
                },
                {
                    "type": "input_value",
                    "name": "R_STEP",
                    "check": "Number"
                }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "move_blocks",
    "tooltip": "move by step",
    "helpUrl": "https://github.com/oroca/OROCA-EduBot"
},
{
    "type": "edubot_motor_set_velocity",
    "message0": "%{BKY_LABEL_MOVE_SET_VELOCITY}",
    "args0": [
                {
                    "type": "input_value",
                    "name": "L_VEL",
                    "check": "Number"
                },
                {
                    "type": "input_value",
                    "name": "R_VEL",
                    "check": "Number"
                }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "move_blocks",
    "tooltip": "move by velocity",
    "helpUrl": "https://github.com/oroca/OROCA-EduBot"
},
{
    "type": "edubot_motor_set_distance",
    "message0": "%{BKY_LABEL_MOVE_SET_DISTANCE}",
    "args0": [
                {
                    "type": "input_value",
                    "name": "L_DIST",
                    "check": "Number"
                },
                {
                    "type": "input_value",
                    "name": "R_DIST",
                    "check": "Number"
                }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "move_blocks",
    "tooltip": "move by distance",
    "helpUrl": "https://github.com/oroca/OROCA-EduBot"
},

{
    "type": "motor_move",
    "message0": "%{BKY_LABEL_MOTOR_MOVE}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "MOTOR_MOVE",
            "options": [
                    [
                     "%{BKY_FIELD_LABEL_MOVE_FRONT}",
                     "MOVE_FRONT"
                     ],
                    [
                     "%{BKY_FIELD_LABEL_MOVE_LEFT}",
                     "MOVE_LEFT"
                     ],
                    [
                     "%{BKY_FIELD_LABEL_MOVE_RIGHT}",
                     "MOVE_RIGHT"
                     ],
                    [
                     "%{BKY_FIELD_LABEL_MOVE_BACKWARD}",
                     "MOVE_BACKWARD"
                     ]
           ]
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "move_blocks",
    "tooltip": "neospider move",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "motor_move_secs",
    "message0": "%{BKY_LABEL_MOTOR_MOVE_SECS}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "MOTOR_MOVE",
            "options": [
                    [
                     "%{BKY_FIELD_LABEL_MOVE_FRONT}",
                     "MOVE_FRONT"
                     ],
                    [
                     "%{BKY_FIELD_LABEL_MOVE_LEFT}",
                     "MOVE_LEFT"
                     ],
                    [
                     "%{BKY_FIELD_LABEL_MOVE_RIGHT}",
                     "MOVE_RIGHT"
                     ],
                    [
                     "%{BKY_FIELD_LABEL_MOVE_BACKWARD}",
                     "MOVE_BACKWARD"
                     ]
           ]
        },
        {
            "type": "input_value",
            "name": "TIME",
            "check": "Number"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "move_blocks",
    "tooltip": "neospider move secs",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "motor_move_stop",
    "message0": "%{BKY_LABEL_MOVE_STOP}",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "move_blocks",
    "tooltip": "neospider move stop",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "servo_move",
    "message0": "%{BKY_LABEL_SERVO_MOVE}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SERVO_MOVE",
            "options": [
                    [
                     "%{BKY_FIELD_LABEL_SERVO_LEFT}",
                     "HEAD_LEFT"
                     ],
                    [
                     "%{BKY_FIELD_LABEL_SERVO_CENTER}",
                     "HEAD_CENTER"
                     ],
                    [
                     "%{BKY_FIELD_LABEL_SERVO_RIGHT}",
                     "HEAD_RIGHT"
                     ]
           ]
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "move_blocks",
    "tooltip": "neospider head",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "servo_angle_move",
    "message0": "%{BKY_LABEL_SERVO_ANGLE_MOVE}",
    "args0": [
        {
        "type": "input_value",
        "name": "ANGLE",
        "check": "Number"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "style": "move_blocks",
    "tooltip": "neospider head angle",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "outer_motor_digital",
    "message0": "%{BKY_LABEL_OUTER_MOTOR_DIGITAL}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "OUTER_PIN",
            "options": [
                [
                    "5",
                    "5"
                    ],
                [
                    "6",
                    "6"
                    ]
           ]
        },
        {
            "type": "field_dropdown",
            "name": "DIGITAL_STATE",
            "options": [
                [
                    "HIGH",
                    "HIGH"
                    ],
                [
                    "LOW",
                    "LOW"
                    ]
           ]
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "move_blocks",
    "tooltip": "neospider outer motor",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "outer_motor_analog",
    "message0": "%{BKY_LABEL_OUTER_MOTOR_ANALOG}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "OUTER_PIN",
            "options": [
                [
                    "5",
                    "5"
                    ],
                [
                    "6",
                    "6"
                    ]
           ]
        },
        {
            "type": "input_value",
            "name": "POWER",
            "check": "Number"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "move_blocks",
    "tooltip": "neospider outer motor",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "delay_time",
    "message0": "%{BKY_LABEL_SLEEP}",
    "args0": [
        {
        "type": "input_value",
        "name": "TIME",
        "check": "Number"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "style": "move_blocks",
    "tooltip": "sleep for desired milliseconds",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "play_tone",
    "message0": "%{BKY_LABEL_PLAY_TONE}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "NOTE",
            "options": [
                ["%{BKY_FIELD_LABEL_TONE_DO}", "1"],
                ["%{BKY_FIELD_LABEL_TONE_DOSHAP}", "2"],
                ["%{BKY_FIELD_LABEL_TONE_RE}", "3"],
                ["%{BKY_FIELD_LABEL_TONE_RESHAP}", "4"],
                ["%{BKY_FIELD_LABEL_TONE_MI}", "5"],
                ["%{BKY_FIELD_LABEL_TONE_FA}", "6"],
                ["%{BKY_FIELD_LABEL_TONE_FASHAP}", "7"],
                ["%{BKY_FIELD_LABEL_TONE_SOL}", "8"],
                ["%{BKY_FIELD_LABEL_TONE_SOLSHAP}", "9"],
                ["%{BKY_FIELD_LABEL_TONE_LA}", "10"],
                ["%{BKY_FIELD_LABEL_TONE_LASHAP}", "11"],
                ["%{BKY_FIELD_LABEL_TONE_SI}", "12"],
           ]
        },
        {
            "type": "field_dropdown",
            "name": "OCTAVE",
            "options": [
                ["0", "0"],
                ["1", "1"],
                ["2", "2"],
                ["3", "3"],
                ["4", "4"],
                ["5", "5"],
                ["6", "6"],
                ["7", "7"],
           ],
        },
        {
            "type": "input_value",
            "name": "TIME",
            "check": "Number"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "output_blocks",
    "tooltip": "neospider play tone",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "module_num_color_led",
    "message0": "%{BKY_LABEL_NUM_COLOR_LED}",
    "args0": [
        {
            "type": "input_value",
            "name": "NUM",
            "check": "Number"
        },
        {
            "type": "input_value",
            "name": "COLOR",
            "check": "Colour"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "output_blocks",
    "tooltip": "Set Color Number Module",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "module_all_color_led",
    "message0": "%{BKY_LABEL_ALL_COLOR_LED}",
    "args0": [
        {
            "type": "input_value",
            "name": "COLOR",
            "check": "Colour"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "output_blocks",
    "tooltip": "Set Color All Module",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "module_num_rgb_led",
    "message0": "%{BKY_LABEL_NUM_RGB_LED}",
    "args0": [
        {
            "type": "input_value",
            "name": "NUM",
            "check": "Number"
        },
        {
            "type": "input_value",
            "name": "RED",
            "check": "Number"
        },
        {
            "type": "input_value",
            "name": "GREEN",
            "check": "Number"
        },
        {
            "type": "input_value",
            "name": "BLUE",
            "check": "Number"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "output_blocks",
    "tooltip": "Set RGB Number Module",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "module_all_rgb_led",
    "message0": "%{BKY_LABEL_ALL_RGB_LED}",
    "args0": [
        {
            "type": "input_value",
            "name": "RED",
            "check": "Number"
        },
        {
            "type": "input_value",
            "name": "GREEN",
            "check": "Number"
        },
        {
            "type": "input_value",
            "name": "BLUE",
            "check": "Number"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "output_blocks",
    "tooltip": "Set RGB All Module",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "module_all_led_off",
    "message0": "%{BKY_LABEL_ALL_LED_OFF}",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "style": "output_blocks",
    "tooltip": "All Module LED OFF",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "get_analog_data",
    "message0": "%{BKY_LABEL_GET_ANALOG_DATA}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SENSOR",
            "options": [
                ["%{BKY_FIELD_LABEL_ANALOG_GAS}", "GAS"],
                ["%{BKY_FIELD_LABEL_ANALOG_CDS}", "CDS"],
                ["%{BKY_FIELD_LABEL_ANALOG_TEMP}", "TEMP"],
                ["%{BKY_FIELD_LABEL_ANALOG_VIBE}", "VIBE"],
                ["%{BKY_FIELD_LABEL_ANALOG_INPUT}", "OUTER"],
           ]
        },
    ],
    "output": "Number",
    "style": "input_blocks",
    "tooltip": "Get Analog Sensor Data",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "get_mapping_analog_data",
    "message0": "%{BKY_LABEL_GET_MAPPING_ANALOG_DATA}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SENSOR",
            "options": [
                ["%{BKY_FIELD_LABEL_ANALOG_GAS}", "GAS"],
                ["%{BKY_FIELD_LABEL_ANALOG_CDS}", "CDS"],
                ["%{BKY_FIELD_LABEL_ANALOG_VIBE}", "VIBE"],
                ["%{BKY_FIELD_LABEL_ANALOG_INPUT}", "OUTER"],
           ]
        },
        {
            "type": "input_value",
            "name": "TRANS_MIN",
            "check": "Number"
        },
        {
            "type": "input_value",
            "name": "TRANS_MAX",
            "check": "Number"
        },
    ],
    "output": "Number",
    "style": "input_blocks",
    "tooltip": "Get Mapping Analog Sensor Data",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "get_ultrasonic_distance",
    "message0": "%{BKY_LABEL_GET_ULTRASONIC_DISTANCE}",
    "output": "Number",
    "style": "input_blocks",
    "tooltip": "Get Ultrasonic Distance",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "is_motion",
    "message0": "%{BKY_LABEL_IS_MOTION}",
    "output": "Boolean",
    "style": "input_blocks",
    "tooltip": "Is detect motion",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "is_infared_left",
    "message0": "%{BKY_LABEL_IS_INFARED_LEFT}",
    "output": "Boolean",
    "style": "input_blocks",
    "tooltip": "Is detect left infared",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
{
    "type": "is_infared_right",
    "message0": "%{BKY_LABEL_IS_INFARED_RIGHT}",
    "output": "Boolean",
    "style": "input_blocks",
    "tooltip": "Is detect right infared",
    "helpUrl": "https://github.com/Neo3ds/NeoSpiderBlockly"
},
]);